import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

import {

 generateQuiz,

 getQuiz

}
from "../controllers/quizController.js";

const router =
express.Router();

router.post(

 "/generate/:id",

 authMiddleware,

 generateQuiz

);

router.get(

 "/:id",

 authMiddleware,

 getQuiz

);

export default router;