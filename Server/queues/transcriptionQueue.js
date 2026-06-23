import { Queue }
from "bullmq";

import connection
from "../config/redis.js";

const transcriptionQueue =
new Queue(

 "transcription",

 {
  connection
 }

);

export default transcriptionQueue;