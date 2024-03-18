const mongoose = require("mongoose");


const categorySchema= new mongoose.Schema({
    category:{
        type: String,
        required: true
    },
    subCategory:{
<<<<<<< HEAD
        type:String
    },
    courses: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Course",
		},
	]

    
},{timestamps:true})
=======
        type: String,

    },

    
    
}, {timestamps: true})
>>>>>>> 54a239f95d688b78b0c589626a5e8f8d556b68ee

module.exports= mongoose.model("category",categorySchema);