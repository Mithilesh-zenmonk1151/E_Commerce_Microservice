const amqp = require("amqplib");

const { register } = require("../processor/consumer.processor");
// const  {register}  =  userProcessor;

const exchangeName = process.env.RABBIT_SUB_EXCHANGE_NAME;
const exchangeType = process.env.RABBIT_EXCHANGE_TYPE;
const routing_key = process.env.RABBIT_SUB_ROUTING_KEY;
const queueName = process.env.RABBIT_QUEUE_NAME;

const processors = {
  [process.env.RABBIT_SUB_USER_DETAILS_SIGN]: register
  // [process.env.RABBIT_SUB_EDIT_PASSWORD_SIGN]:
};

exports.recieveMsg = async () => {
  try {
    const connection = await amqp.connect("amqp://localhost:5672");
    const channel = await connection.createChannel();

    await channel.assertExchange(exchangeName, exchangeType);
    const q = await channel.assertQueue(queueName, { durable: true });

    await channel.bindQueue(q?.queue, exchangeName, "auth");

    console.log(`Waiting for messages in queue: ${q.queue}`);
    channel.consume(q?.queue, async (msg) => {
      console.log("message sent ");
      console.log(
        "msg: ",
        "headers: ",
        msg?.properties?.headers,
        "type: ",
        msg?.properties?.type,
        "\n"
      );

      const handle_processor =
        processors[msg?.properties?.type] ||
        processors[msg?.properties?.headers?.type];

      if (handle_processor) {
        try {
          const data = JSON.parse(msg?.content?.toString());
          console.log(data);
          await handle_processor(data);
          channel.ack(msg);
        } catch (error) {
          console.log(error.message);
          channel.nack(msg, false, false);
        }
      } else {
        console.log(`Messages ignore with id: ${msg?.properties?.messageId}`);
        channel.nack(msg, false, false);
      }
    });
  } catch (err) {
    console.log(err);
  }
};
