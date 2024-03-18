// services/rabbitmqConsumer.js
const amqp = require('amqplib');

const consumeMessage = async(queue, callback) =>{
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertQueue(queue, { durable: false });
        channel.consume(queue, (message) => {
          if (message) {
            callback(message.content.toString());
            channel.ack(message);
          }
        });
        console.log(`Started consuming messages from ${queue}`);
      } catch (error) {
        console.error('Error consuming message:', error.message);
      }
}

module.exports = { consumeMessage };
