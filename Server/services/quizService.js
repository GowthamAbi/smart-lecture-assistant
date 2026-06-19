import {
 GoogleGenerativeAI
}
from "@google/generative-ai";

const genAI =
new GoogleGenerativeAI(
 process.env.GEMINI_API_KEY
);

export const generateQuizFromText =
async(text)=>{

 const model =
 genAI.getGenerativeModel({

  model:"gemini-1.5-flash"

 });

 const prompt = `

Generate exactly 10 MCQ questions.

Return ONLY valid JSON.

Format:

[
 {
   "question":"Question",
   "options":[
      "Option A",
      "Option B",
      "Option C",
      "Option D"
   ],
   "answer":"Correct Option"
 }
]

Lecture Content:

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