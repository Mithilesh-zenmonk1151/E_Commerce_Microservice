const amqplib = require('amqplib');
const exchangeName = 'auth';


exports.sentMsg = async({name, email, password}) => {
    try {
        const connection = await amqplib.connect('amqp://localhost');
        const channel = await connection.createChannel();
        await channel.assertExchange(exchangeName, 'fanout', {durable: false});
        const msg = {name, email, password};
        
        channel.publish(exchangeName, '', Buffer.from(JSON.stringify(msg)));
        console.log("sent", msg);
    } catch (error) {
        console.log(error, "connection not created..");
    }
}