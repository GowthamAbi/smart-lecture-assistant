import Lecture from "../models/Lecture.js";

export const uploadLecture =
async(req,res)=>{

 try{

  const lecture =
  await Lecture.create({

   title:
   req.file.originalname,

   audio:
   req.file.path,

   user:
   req.user.id

  });

  res.status(201).json({

   success:true,

   lecture

  });

 }

 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};

export const getLectures =
async(req,res)=>{

 try{

  const lectures =
  await Lecture.find({

   user:req.user.id

  })
  .sort({
   createdAt:-1
  });

  res.json(
   lectures
  );

 }

 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};

export const getLectureById =
async(req,res)=>{

 try{

  const lecture =
  await Lecture.findById(

   req.params.id

  );

  if(!lecture){

   return res.status(404).json({

    message:
    "Lecture Not Found"

   });

  }

  res.json(
   lecture
  );

 }

 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};

export const deleteLecture =
async(req,res)=>{

 try{

  const lecture =
  await Lecture.findById(

   req.params.id

  );

  if(!lecture){

   return res.status(404).json({

    message:
    "Lecture Not Found"

   });

  }

  await lecture.deleteOne();

  res.json({

   success:true,

   message:
   "Lecture Deleted"

  });

 }

 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};