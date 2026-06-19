import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

import {
 askQuestion
}
from "../controllers/chatbotController.js";

const router =
express.Router();

router.post(

 "/ask",

 authMiddleware,

 askQuestion

);

export default router;