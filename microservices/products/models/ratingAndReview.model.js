const mongoose= require("mongoose");
const user= require("./product.model")
const rattingAndReviewSchema= new mongoose.Schema({
    userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: "user",
	},
	rating: {
		type: Number,
		required: true,
	},
	review: {
		type: String,
		required: true,
	},
	productId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'product',
	},
},{timestamps:true})
module.exports= mongoose.model("rattingAndReview", rattingAndReviewSchema);