import { useState } from "react";

function Flashcard({

 question,

 answer

}) {

 const [flipped,setFlipped] =
 useState(false);

 return (

  <div
   className="w-full max-w-xl mx-auto cursor-pointer"
   onClick={()=>
    setFlipped(!flipped)
   }
  >

   <div

    className={`

    h-80

    rounded-2xl

    shadow-xl

    flex

    items-center

    justify-center

    text-center

    p-8

    transition-all

    duration-500

    ${

      flipped

      ?

      "bg-green-500 text-white"

      :

      "bg-blue-500 text-white"

    }

    `}

   >

    <div>

     <h3 className="text-sm mb-3 opacity-80">

      {

       flipped

       ?

       "Answer"

       :

       "Question"

      }

     </h3>

     <h1 className="text-2xl font-bold">

      {

       flipped

       ?

       answer

       :

       question

      }

     </h1>

    </div>

   </div>

  </div>

 );

}

export default Flashcard;