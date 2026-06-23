import { Queue }
from "bullmq";

import connection
from "../config/redis.js";

const notesQueue =
new Queue(

 "notes",

 {
  connection
 }

);

export default notesQueue;