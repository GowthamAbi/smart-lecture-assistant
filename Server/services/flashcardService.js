import {
 GoogleGenerativeAI
}
from "@google/generative-ai";

const genAI =
new GoogleGenerativeAI(
 process.env.GEMINI_API_KEY
);

export const generateFlashcardsFromText =
async(text)=>{

 const model =
 genAI.getGenerativeModel({

  model:"gemini-1.5-flash"

 });

 const prompt = `

Generate 15 flashcards from the lecture.

Return ONLY valid JSON.

Format:

[
 {
   "question":"Question",
   "answer":"Answer"
 }
]

Lecture:

${text}

`;

 const result =
 await model.generateContent(
  prompt
 );

 let response =
 result.response.text();

 response =
 response
 .replace(/```json/g,"")
 .replace(/```/g,"")
 .trim();

 return JSON.parse(
  response
 );

};