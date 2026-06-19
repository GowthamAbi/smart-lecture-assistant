import Lecture
from "../models/Lecture.js";

import Flashcard
from "../models/Flashcard.js";

import {
 generateFlashcardsFromText
}
from "../services/flashcardService.js";

export const generateFlashcards =
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

  const cards =
  await generateFlashcardsFromText(

   lecture.summary

  );

  let flashcard =
  await Flashcard.findOne({

   lecture:
   lecture._id

  });

  if(flashcard){

   flashcard.cards =
   cards;

   await flashcard.save();

  }
  else{

   flashcard =
   await Flashcard.create({

    lecture:
    lecture._id,

    cards

   });

  }

  res.json({

   flashcards:
   flashcard.cards

  });

 }
 catch(error){

  res.status(500).json({

   message:
   error.message

  });

 }

};

export const getFlashcards =
async(req,res)=>{

 try{

  const flashcard =
  await Flashcard.findOne({

   lecture:
   req.params.id

  });

  if(!flashcard){

   return res.status(404).json({

    message:
    "Flashcards Not Found"

   });

  }

  res.json({

   flashcards:
   flashcard.cards

  });

 }
 catch(error){

  res.status(500).json({

   message:
   error.message

  });

 }

};