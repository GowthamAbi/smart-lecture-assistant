import {
 semanticSearch
}
from "../services/vectorSearchService.js";

import {
 askLectureQuestion
}
from "../services/geminiService.js";

import Chat
from "../models/Chat.js";

export const askQuestion =
async(req,res)=>{

 try{

  const {
   lectureId,
   message
  } = req.body;

  if(
   !lectureId ||
   !message
  ){

   return res.status(400).json({
    message:
    "LectureId and Message Required"
   });

  }

  // FAISS Semantic Search

  const context =
  await semanticSearch(
   message
  );

  // Gemini Response

  const answer =
  await askLectureQuestion(
   context,
   message
  );

  // Save Chat

  await Chat.create({

   user:req.user.id,

   lecture:lectureId,

   question:message,

   answer

  });

  res.json({
   answer
  });

 }
 catch(error){

  res.status(500).json({
   message:error.message
  });

 }

};