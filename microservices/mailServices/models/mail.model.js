const mongoose = require("mongoose");
const emailSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    trim: true,
  },
  approved:{
    type: String,
    enum:["true","false"],
    default:"false" 
  },
  otp:{
    type:String,
     trim:true
  }
},{timestamps:true});
module.exports= mongoose.model("email", emailSchema);
