import { Worker }
from "bullmq";

import connection
from "../config/redis.js";

import {
 generateQuizFromText
}
from "../services/quizService.js";

new Worker(

 "quiz",

 async(job)=>{

  return await generateQuizFromText(

   job.data.summary

  );

 },

 {
  connection
 }

);