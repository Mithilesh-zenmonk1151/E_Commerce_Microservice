const amqplib= require("amqplib");
const exchangeName= "logs";
const msg= process.argv.slice(2).join("")||"";
const sendMessage= async()=>{
    const connection= await amqplib.connect("amqp://localhost");
    const channel= await connection.createChannel();
    await channel.assertExchange(exchangeName,'fanout',{durable:false});
    channel.sendToQueue(exchangeName,'',Buffer.from(msg));
    console.log('sent', msg);
    setTimeout(()=>{
        console.close();
        process.exit(0);
    },500)
}
sendMessage();