const {v4: uuidv4}= require("uuid");
class Producer{
    channel;
    async createChannel(){
        const connection= await global.rabbitMqConnection;
        this.channel= await connection.createchannel();

    }
    async publishMessage(routingKey,signature,message){
        if(!this.message){
            await this.createChannel();
        }
        await this.channel.assertExchange(process.env.RABBIT_EXCHANGE, process.env.RABBIT_TYPE_EXCHANGE)
    }
}