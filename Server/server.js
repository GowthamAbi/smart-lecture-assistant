import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import lectureRoutes
from "./routes/lectureRoutes.js";
import notesRoutes
from "./routes/notesRoutes.js";
import quizRoutes
from "./routes/quizRoutes.js";
import flashcardRoutes
from "./routes/flashcardRoutes.js";
import chatbotRoutes
from "./routes/chatbotRoutes.js";
import profileRoutes
from "./routes/profileRoutes.js";

import historyRoutes
from "./routes/historyRoutes.js";
import pdfRoutes
from "./routes/pdfRoutes.js";

dotenv.config();

connectDB();

const app =
express();

app.use(cors());

app.use(express.json());

app.get("/",(req,res)=>{

res.send(
"Smart Lecture Assistant API Running"
);

});

app.use(
"/api/auth",
authRoutes
);

app.use(
 "/api/lectures",
 lectureRoutes
);
app.use(
 "/api/notes",
 notesRoutes
);

app.use(
 "/api/quiz",
 quizRoutes
);

app.use(
 "/api/flashcards",
 flashcardRoutes
);

app.use(
 "/api/chatbot",
 chatbotRoutes
);

app.use(
 "/api/users",
 profileRoutes
);

app.use(
 "/api/lectures",
 historyRoutes
);

app.use(
 "/api/pdf",
 pdfRoutes
);
const PORT =
process.env.PORT || 5000;

app.listen(
PORT,
()=>{

console.log(
`Server Running On ${PORT}`
);

}
);