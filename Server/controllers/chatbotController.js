import {
 getLectureContext
}
from "../services/ragService.js";

import {
 askLectureQuestion
}
from "../services/geminiService.js";

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

  const context =
  await getLectureContext(
   lectureId
  );

  const answer =
  await askLectureQuestion(

   context,

   message

  );

  res.json({

   answer

  });

 }
 catch(error){

  res.status(500).json({

   message:
   error.message

  });

 }

};