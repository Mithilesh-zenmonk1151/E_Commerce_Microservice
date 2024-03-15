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
        channel.assertQueue(queueName,{
            durable: false
        });
      channel.consume(queueName,(msg)=>{
        console.log(`Recieved : ${msg.content.toString()}`)
      })
    })

})