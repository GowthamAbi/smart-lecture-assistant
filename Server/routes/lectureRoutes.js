import express from "express";

import upload
from "../config/multer.js";

import authMiddleware
from "../middleware/authMiddleware.js";

import {

 uploadLecture,

 getLectures,

 getLectureById,

 deleteLecture

}
from "../controllers/lectureController.js";

const router =
express.Router();

router.post(

 "/upload",

 authMiddleware,

 upload.single(
  "audio"
 ),

 uploadLecture

);

router.get(

 "/",

 authMiddleware,

 getLectures

);

router.get(

 "/:id",

 authMiddleware,

 getLectureById

);

router.delete(

 "/:id",

 authMiddleware,

 deleteLecture

);

export default router;