import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import NoteCard from "../components/NoteCard";
import Loader from "../components/Loader";

import {
 generateNotes
}
from "../services/noteService";

function Notes() {

 const [lectureId,setLectureId] =
 useState("");

 const [summary,setSummary] =
 useState("");

 const [transcript,setTranscript] =
 useState("");

 const [loading,setLoading] =
 useState(false);

 const handleGenerate =
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
   await generateNotes(
    lectureId
   );

   setTranscript(
    data.transcript
   );

   setSummary(
    data.summary
   );

  }
  catch(error){

   console.log(error);

   alert(
    "Failed To Generate Notes"
   );

  }
  finally{

   setLoading(false);

  }

 };

 const downloadNotes = ()=>{

  const element =
  document.createElement("a");

  const file =
  new Blob(

   [

    `
Transcript:

${transcript}

----------------------------------

Summary:

${summary}

    `

   ],

   {
    type:"text/plain"
   }

  );

  element.href =
  URL.createObjectURL(
   file
  );

  element.download =
  "LectureNotes.txt";

  document.body.appendChild(
   element
  );

  element.click();

 };

 return (

  <div className="flex">

   <Sidebar />

   <div className="flex-1">

    <Navbar />

    <div className="p-6 bg-slate-100 min-h-screen">

     <h1 className="text-3xl font-bold mb-6">

      AI Notes Generator

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

       onClick={handleGenerate}

       className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-lg"

      >

       Generate Notes

      </button>

      {

       summary &&

       <button

        onClick={downloadNotes}

        className="mt-4 ml-4 bg-green-600 text-white px-6 py-3 rounded-lg"

       >

        Download Notes

       </button>

      }

     </div>

     {

      loading

      ?

      <Loader />

      :

      <div className="space-y-6">

       {

        transcript &&

        <NoteCard

         title="Transcript"

         content={transcript}

        />

       }

       {

        summary &&

        <NoteCard

         title="AI Summary"

         content={summary}

        />

       }

      </div>

     }

    </div>

   </div>

  </div>

 );

}

export default Notes;