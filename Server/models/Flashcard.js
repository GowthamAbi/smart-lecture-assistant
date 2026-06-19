import mongoose from "mongoose";

const flashcardSchema =
new mongoose.Schema({

 lecture:{
  type:
  mongoose.Schema.Types.ObjectId,

  ref:"Lecture"
 },

 cards:[
  {

   question:String,

   answer:String

  }

 ],

 createdAt:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model(
 "Flashcard",
 flashcardSchema
);