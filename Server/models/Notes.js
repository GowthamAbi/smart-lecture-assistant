import mongoose from "mongoose";

const notesSchema =
new mongoose.Schema({

 lecture:{
  type:
  mongoose.Schema.Types.ObjectId,
  ref:"Lecture",
  required:true
 },

 transcript:{
  type:
  mongoose.Schema.Types.ObjectId,
  ref:"Transcript"
 },

 summary:{
  type:String,
  required:true
 },

 keyPoints:[String],

 keywords:[String],

 createdAt:{
  type:Date,
  default:Date.now
 }

});

export default mongoose.model(
 "Notes",
 notesSchema
);