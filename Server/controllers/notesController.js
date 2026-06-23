import Lecture from "../models/Lecture.js";

import {
 transcribeAudio
}
from "../services/whisperService.js";

import {
 generateSummary
}
from "../services/geminiService.js";

import Notes
from "../models/Notes.js";

import Transcript
from "../models/Transcript.js";

export const generateNotes =
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

  let transcript =
  lecture.transcript;

  if(!transcript){

   transcript =
   await transcribeAudio(

    lecture.audio

   );

   lecture.transcript =
   transcript;

  }

  const summary =
  await generateSummary(

   transcript

  );

  lecture.summary =
  summary;

  await lecture.save();

  res.json({

   transcript,

   summary

  });

  const transcriptDoc =
await Transcript.create({

 lecture:lecture._id,

 content:transcript

});

await Notes.create({

 lecture:lecture._id,

 transcript:
 transcriptDoc._id,

 summary

});



 }
 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};

export const getNotes =
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

  res.json({

   transcript:
   lecture.transcript,

   summary:
   lecture.summary

  });

 }
 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};