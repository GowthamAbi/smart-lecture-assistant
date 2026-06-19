import Lecture
from "../models/Lecture.js";

import Quiz
from "../models/Quiz.js";

import {
 generateQuizFromText
}
from "../services/quizService.js";

export const generateQuiz =
async(req,res)=>{

 try{

  const lecture =
  await Lecture.findById(
   req.params.id
  );

  if(!lecture){

   return res.status(404).json({

    message:
    "Lecture Not Found"

   });

  }

  if(!lecture.summary){

   return res.status(400).json({

    message:
    "Generate Notes First"

   });

  }

  const questions =
  await generateQuizFromText(

   lecture.summary

  );

  let quiz =
  await Quiz.findOne({

   lecture:
   lecture._id

  });

  if(quiz){

   quiz.questions =
   questions;

   await quiz.save();

  }
  else{

   quiz =
   await Quiz.create({

    lecture:
    lecture._id,

    questions

   });

  }

  res.json({

   quiz:
   quiz.questions

  });

 }
 catch(error){

  res.status(500).json({

   message:
   error.message

  });

 }

};

export const getQuiz =
async(req,res)=>{

 try{

  const quiz =
  await Quiz.findOne({

   lecture:
   req.params.id

  });

  if(!quiz){

   return res.status(404).json({

    message:
    "Quiz Not Found"

   });

  }

  res.json({

   quiz:
   quiz.questions

  });

 }
 catch(error){

  res.status(500).json({

   message:
   error.message

  });

 }

};