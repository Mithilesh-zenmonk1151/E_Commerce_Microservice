const mongoose = require("mongoose");

const categorySchema= new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    subCategory:{
        type:String
    },
    courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
	]

    
},{timestamps:true})

module.exports= mongoose.model("category",categorySchema);