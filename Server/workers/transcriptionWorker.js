import { Worker }
from "bullmq";

import connection
from "../config/redis.js";

import {
 transcribeAudio
}
from "../services/whisperService.js";

new Worker(

 "transcription",

 async(job)=>{

  const {
   audioPath
  } = job.data;

  const transcript =
  await transcribeAudio(
   audioPath
  );

  return transcript;

 },

 {
  connection
 }

);