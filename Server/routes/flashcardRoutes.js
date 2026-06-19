import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

import {

 generateFlashcards,

 getFlashcards

}
from "../controllers/flashcardController.js";

const router =
express.Router();

router.post(

 "/generate/:id",

 authMiddleware,

 generateFlashcards

);

router.get(

 "/:id",

 authMiddleware,

 getFlashcards

);

export default router;