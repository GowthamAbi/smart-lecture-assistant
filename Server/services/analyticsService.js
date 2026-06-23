import Analytics
from "../models/Analytics.js";

export const incrementField =
async(userId,field)=>{

 await Analytics.findOneAndUpdate(

  { user:userId },

  {
   $inc:{
    [field]:1
   }
  },

  {
   upsert:true
  }

 );

};