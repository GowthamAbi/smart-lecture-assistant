import mongoose from "mongoose";

const quizSchema =
new mongoose.Schema({

 lecture:{
  type:
  mongoose.Schema.Types.ObjectId,

  ref:"Lecture"
 },

 questions:[
  {

   question:String,

   options:[String],

   answer:String

  }

 ],

 createdAt:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model(
 "Quiz",
 quizSchema
);