import Lecture
from "../models/Lecture.js";

import {
 generatePDF
}
from "../services/pdfService.js";

export const downloadPDF =
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

  const pdfPath =
  await generatePDF(

   lecture,

   lecture.summary

  );

  res.download(
   pdfPath
  );

 }
 catch(error){

  res.status(500).json({

   message:
   error.message

  });

 }

};