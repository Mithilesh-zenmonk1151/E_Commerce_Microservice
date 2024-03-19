const amqp = require('amqplib');

class Producer {
    channel;
    async createChannel() {
        try {
            const connection = await amqp.connect('amqp://localhost');
            this.channel = await connection.createChannel();   
        } catch (error) {
            console.log("channel not created", error);
        }
    }
    async sentMsg({exchangeName,fullName, email, password,role}){
        try {
            if (!this.channel) {
                await this.createChannel()
            }
            await this.channel.assertExchange(exchangeName, 'fanout', {durable: false});
            const msg = {fullName, email, password,role};
            this.channel.publish(exchangeName, '', Buffer.from(JSON.stringify(msg)));
            console.log("sent", msg);
        } catch (error) {
            console.log(error, "connection not created..");
        }
    }
}
module.exports = Producer;