import { Worker }
from "bullmq";

import connection
from "../config/redis.js";

import {
 generateSummary
}
from "../services/geminiService.js";

new Worker(

 "notes",

 async(job)=>{

  return await generateSummary(

   job.data.transcript

  );

 },

 {
  connection
 }

);