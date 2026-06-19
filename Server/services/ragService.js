import Lecture from "../models/Lecture.js";

export const getLectureContext =
async(lectureId)=>{

 const lecture =
 await Lecture.findById(
  lectureId
 );

 if(!lecture){

  throw new Error(
   "Lecture Not Found"
  );

 }

 return `

 Transcript:

 ${lecture.transcript}

 Summary:

 ${lecture.summary}

 `;

};