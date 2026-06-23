import { Queue }
from "bullmq";

import connection
from "../config/redis.js";

const quizQueue =
new Queue(

 "quiz",

 {
  connection
 }

);

export default quizQueue;