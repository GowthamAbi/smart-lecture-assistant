import mongoose from "mongoose";

const lectureSchema =
new mongoose.Schema({

 title:{
  type:String,
  required:true
 },

 audio:{
  type:String,
  required:true
 },

 transcript:{
  type:String,
  default:""
 },

 summary:{
  type:String,
  default:""
 },

 user:{
  type:
  mongoose.Schema.Types.ObjectId,

  ref:"User"
 },

 createdAt:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model(
 "Lecture",
 lectureSchema
);