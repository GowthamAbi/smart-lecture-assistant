import mongoose from "mongoose";

const transcriptSchema =
new mongoose.Schema({

 lecture:{
  type:
  mongoose.Schema.Types.ObjectId,
  ref:"Lecture",
  required:true
 },

 content:{
  type:String,
  required:true
 },

 language:{
  type:String,
  default:"en"
 },

 duration:{
  type:Number,
  default:0
 },

 createdAt:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model(
 "Transcript",
 transcriptSchema
);