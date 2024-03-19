module.exports = {
  consumerWorker: require("./consumer.rabbit"),
  publisherWorker: require("./publisher.rabbit"),
};
