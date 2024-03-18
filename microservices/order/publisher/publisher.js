const amqp= require("amqlib/callback_api");
amqp.connect(`amqp://localhost`,(error,connection)=>{
    if(error){
        throw error;

    }
    connection.createChannel((error, channel)=>{
        if(error){
            throw error;
        }

        let queueName= "orders";
        let message= "The orders created";
        channel.assertQueue(queueName,{
            durable: false
        });
        channel.sendToQueue(queueName,Buffer.from(message));
        setTimeout(()=>{
            connection.close();
        },1000)

    })

})