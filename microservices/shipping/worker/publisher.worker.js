const uuid = require("uuid");
const amqp = require("amqplib");
const exchangeName = process.env.RABBIT_PUB_EXCHANGE_NAME;
const exchangeType = process.env.RABBIT_EXCHANGE_TYPE;

exports.sendMsg = async (routing_key, signature, msg) => {
  const connection = await amqp.connect("amqp://localhost:5672");
  const channel = await connection.createChannel();
  await channel.assertExchange(exchangeName, exchangeType, { durable: true });
  const properties = {
    type: signature,
  };
  const publishDetails = {
    uuid: uuid.v1(),
    fired_at: new Date(),
    user_details: msg,
  };
  console.log("PUbbbbbblishhhhhh", publishDetails);
  await channel.publish(
    exchangeName,
    routing_key,
    Buffer.from(JSON.stringify(publishDetails)),
    properties,
    { persistant: true }
  );
  console.log(
    `This message is sent to exchange ${process.env.RABBIT_PUB_EXCHANGE_NAME}`
  );
};
