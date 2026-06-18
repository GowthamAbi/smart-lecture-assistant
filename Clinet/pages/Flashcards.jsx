import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Loader from "../components/Loader";
import Flashcard from "../components/Flashcard";

import {
 generateFlashcards
}
from "../services/flashcardService";

function Flashcards() {

 const [lectureId,setLectureId] =
 useState("");

 const [cards,setCards] =
 useState([]);

 const [current,setCurrent] =
 useState(0);

 const [loading,setLoading] =
 useState(false);

 const loadFlashcards =
 async()=>{

  if(!lectureId){

   alert(
    "Enter Lecture ID"
   );

   return;

  }

  try{

   setLoading(true);

   const data =
   await generateFlashcards(
    lectureId
   );

   setCards(
    data.flashcards
   );

   setCurrent(0);

  }

  catch(error){

   console.log(error);

   alert(
    "Failed To Load Flashcards"
   );

  }

  finally{

   setLoading(false);

  }

 };

 const nextCard = ()=>{

  if(

   current <

   cards.length - 1

  ){

   setCurrent(

    current + 1

   );

  }

 };

 const previousCard = ()=>{

  if(current > 0){

   setCurrent(

    current - 1

   );

  }

 };

 return (

  <div className="flex">

   <Sidebar />

   <div className="flex-1">

    <Navbar />

    <div className="min-h-screen bg-slate-100 p-6">

     <h1 className="text-3xl font-bold mb-6">

      AI Flashcards

     </h1>

     <div className="bg-white p-6 rounded-xl shadow mb-6">

      <input

       type="text"

       placeholder="Enter Lecture ID"

       value={lectureId}

       onChange={(e)=>

        setLectureId(
         e.target.value
        )

       }

       className="border p-3 rounded-lg w-full"

      />

      <button

       onClick={loadFlashcards}

       className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-4"

      >

       Generate Flashcards

      </button>

     </div>

     {

      loading

      ?

      <Loader />

      :

      cards.length > 0

      ?

      <>

       <Flashcard

        question={
         cards[current]
         ?.question
        }

        answer={
         cards[current]
         ?.answer
        }

       />

       <div className="flex justify-center items-center gap-4 mt-8">

        <button

         onClick={previousCard}

         className="bg-gray-600 text-white px-5 py-2 rounded-lg"

        >

         Previous

        </button>

        <span className="font-semibold">

         {

          current + 1

         }

         /

         {

          cards.length

         }

        </span>

        <button

         onClick={nextCard}

         className="bg-green-600 text-white px-5 py-2 rounded-lg"

        >

         Next

        </button>

       </div>

      </>

      :

      <div className="text-center text-gray-500">

       No Flashcards Generated

      </div>

     }

    </div>

   </div>

  </div>

 );

}

export default Flashcards;