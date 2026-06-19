import axios from "axios";
import fs from "fs";
import FormData from "form-data";

export const transcribeAudio =
async(audioPath)=>{

 try{

  const formData =
  new FormData();

  formData.append(

   "file",

   fs.createReadStream(
    audioPath
   )

  );

  formData.append(
   "model",
   "whisper-1"
  );

  const response =
  await axios.post(

   "https://api.openai.com/v1/audio/transcriptions",

   formData,

   {

    headers:{

     Authorization:
     `Bearer ${process.env.OPENAI_API_KEY}`,

     ...formData.getHeaders()

    }

   }

  );

  return response.data.text;

 }
 catch(error){

  console.log(error);

  throw new Error(
   "Transcription Failed"
  );

 }

};