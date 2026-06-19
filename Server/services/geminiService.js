import {
 GoogleGenerativeAI
}
from "@google/generative-ai";

const genAI =
new GoogleGenerativeAI(

 process.env.GEMINI_API_KEY

);

export const generateSummary =
async(text)=>{

 try{

  const model =
  genAI.getGenerativeModel({

   model:"gemini-1.5-flash"

  });

  const result =
  await model.generateContent(

   `
   Summarize this lecture.

   Make sections:

   1. Overview
   2. Key Concepts
   3. Important Points
   4. Conclusion

   Lecture:

   ${text}
   `

  );

  return result.response.text();

 }
 catch(error){

  console.log(error);

  throw new Error(
   "Summary Generation Failed"
  );

 }

};

export const askLectureQuestion =
async(context,question)=>{

 try{

  const model =
  genAI.getGenerativeModel({

   model:"gemini-1.5-flash"

  });

  const prompt = `

You are an AI Tutor.

Answer ONLY using the lecture content.

If answer is not available,
reply:

"Information not found in lecture."

Lecture Context:

${context}

Question:

${question}

`;

  const result =
  await model.generateContent(
   prompt
  );

  return result.response.text();

 }
 catch(error){

  console.log(error);

  throw new Error(
   "Chatbot Failed"
  );

 }

};