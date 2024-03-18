const amqp = require('amqplib');
const publishMessage=async(queue, message)=> {
  try {
    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertQueue(queue, { durable: false });
    await channel.sendToQueue(queue, Buffer.from(message));
    console.log(`Sent message to ${queue}: ${message}`);
    await channel.close();
    await connection.close();
  } catch (error) {
    console.error('Error publishing message:', error.message);
  }
}

module.exports = { publishMessage };
