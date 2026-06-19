import Lecture from "../models/Lecture.js";

export const getHistory =
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

export const deleteHistory =
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