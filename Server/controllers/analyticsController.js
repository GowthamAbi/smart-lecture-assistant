import Analytics
from "../models/Analytics.js";

export const getAnalytics =
async(req,res)=>{

 try{

  let analytics =
  await Analytics.findOne({

   user:req.user.id

  });

  if(!analytics){

   analytics =
   await Analytics.create({

    user:req.user.id

   });

  }

  res.json(
   analytics
  );

 }
 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};