import express from "express";

import authMiddleware
from "../middleware/authMiddleware.js";

import {
 downloadPDF
}
from "../controllers/pdfController.js";

const router =
express.Router();

router.get(

 "/download/:id",

 authMiddleware,

 downloadPDF

);

export default router;