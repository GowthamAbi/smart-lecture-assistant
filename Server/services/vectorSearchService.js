import { spawn } from "child_process";

export const semanticSearch =
(query)=>{

 return new Promise(

  (resolve,reject)=>{

   const python =
   spawn(

    "python",

    [

     "ai-service/rag_pipeline.py",

     query

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