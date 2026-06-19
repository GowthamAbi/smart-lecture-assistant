import multer from "multer";
import path from "path";

const storage = multer.diskStorage({

 destination:(req,file,cb)=>{

  cb(
   null,
   "uploads/audio"
  );

 },

 filename:(req,file,cb)=>{

  cb(

   null,

   Date.now() +

   path.extname(
    file.originalname
   )

  );

 }

});

const upload = multer({

 storage,

 limits:{
  fileSize:
  50 * 1024 * 1024
 },

 fileFilter:(req,file,cb)=>{

  const allowedTypes =

  /mp3|wav|m4a/;

  const extname =

  allowedTypes.test(

   path.extname(
    file.originalname
   ).toLowerCase()

  );

  if(extname){

   return cb(
    null,
    true
   );

  }

  cb(
   "Only Audio Files Allowed"
  );

 }

});

export default upload;