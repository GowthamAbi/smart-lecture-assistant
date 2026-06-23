import mongoose from "mongoose";

const chatSchema =
new mongoose.Schema({

 user:{
  type:
  mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 lecture:{
  type:
  mongoose.Schema.Types.ObjectId,
  ref:"Lecture"
 },

 question:{
  type:String,
  required:true
 },

 answer:{
  type:String,
  required:true
 },

 source:{
  type:String,
  default:"Gemini"
 },

 createdAt:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model(
 "Chat",
 chatSchema
);