import User from "../models/User.js";

export const getProfile =
async(req,res)=>{

 try{

  const user =
  await User.findById(

   req.user.id

  ).select("-password");

  if(!user){

   return res.status(404).json({

    message:
    "User Not Found"

   });

  }

  res.json(user);

 }
 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};

export const updateProfile =
async(req,res)=>{

 try{

  const user =
  await User.findById(

   req.user.id

  );

  if(!user){

   return res.status(404).json({

    message:
    "User Not Found"

   });

  }

  user.name =
  req.body.name ||
  user.name;

  user.email =
  req.body.email ||
  user.email;

  const updatedUser =
  await user.save();

  res.json({

   id:updatedUser._id,

   name:updatedUser.name,

   email:updatedUser.email

  });

 }
 catch(error){

  res.status(500).json({

   message:error.message

  });

 }

};