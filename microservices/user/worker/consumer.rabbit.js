const amqplib = require("amqplib");
  const receiveMsg = async (exchangeName) => {
  const connection = await amqplib.connect("amqp://localhost");
  const channel = await connection.createChannel();
  await channel.assertExchange(exchangeName, "fanout", { durable: false });
  const q = await channel.assertQueue("", { exclusive: true });
  console.log("queue name : ", q.queue);
  channel.bindQueue(q.queue, exchangeName, ""); // routing key
  channel.consume(q.queue, (msg) => {
    if (msg.content) console.log(" the message is : ", msg.content.toString());
  });
};

receiveMsg();
