import mongoose from "mongoose";

const analyticsSchema =
new mongoose.Schema({

 user:{
  type:
  mongoose.Schema.Types.ObjectId,
  ref:"User"
 },

 totalLectures:{
  type:Number,
  default:0
 },

 totalNotes:{
  type:Number,
  default:0
 },

 totalQuizzes:{
  type:Number,
  default:0
 },

 totalFlashcards:{
  type:Number,
  default:0
 },

 totalChats:{
  type:Number,
  default:0
 },

 lastActive:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model(
 "Analytics",
 analyticsSchema
);