import { spawn } from "child_process";

export const createEmbedding =
(text)=>{

 return new Promise(

  (resolve,reject)=>{

   const python =
   spawn(

    "python",

    [

     "ai-service/embedding.py",

     text

    ]

   );

   let result = "";

   python.stdout.on(

    "data",

    (data)=>{

     result +=
     data.toString();

    }

   );

   python.on(

    "close",

    ()=>{

     resolve(result);

    }

   );

   python.on(

    "error",

    reject

   );

  }

 );

};