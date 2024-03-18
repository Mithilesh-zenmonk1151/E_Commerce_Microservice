const { v4: uuidv4 } = require("uuid");
class Producer {
  static channel;
  static async getChannel() {
    if (!this.channel) {
      const connection = global.rabbitMqConnection;
      this.channel = await connection.createChannnel();
    }
    return this.channel;
  }

  async publishMessage(routingKey, signature, message) {
    const channel = await Producer.getChannel();
    await channel.assertExchange(
      process.env.RABBIT_EXCHANGE,
      process.env.RABBIT_TYPE_EXCHANGE
    );
    const properties = {
      type: signature,
    };
    const details = {
      uuid: uuidv4(),
      fired_at: new Date(),
      productDetails: message,
    };
    await channel.publish(
      process.env.RABBIT_EXCHANGE,
      routingKey,
      Buffer.from(JSON.stringify(details)),
      properties
    );
    console.log(`Message sent to ${process.env.RABBIT_EXCHANGE}`, message);
  }
}
module.exports = Producer;
