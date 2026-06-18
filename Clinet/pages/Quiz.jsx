import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import QuizCard from "../components/QuizCard";
import Loader from "../components/Loader";

import {
 generateQuiz
}
from "../services/quizService";

function Quiz() {

 const [lectureId,setLectureId] =
 useState("");

 const [quiz,setQuiz] =
 useState([]);

 const [answers,setAnswers] =
 useState({});

 const [score,setScore] =
 useState(null);

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
   await generateQuiz(
    lectureId
   );

   setQuiz(
    data.quiz
   );

   setScore(null);

   setAnswers({});

  }

  catch(error){

   console.log(error);

   alert(
    "Quiz Generation Failed"
   );

  }

  finally{

   setLoading(false);

  }

 };

 const selectAnswer = (
  questionIndex,
  option
 )=>{

  setAnswers({

   ...answers,

   [questionIndex]:option

  });

 };

 const submitQuiz = ()=>{

  let total = 0;

  quiz.forEach(

   (q,index)=>{

    if(

     answers[index] ===

     q.answer

    ){

     total++;

    }

   }

  );

  setScore(total);

 };

 return (

  <div className="flex">

   <Sidebar />

   <div className="flex-1">

    <Navbar />

    <div className="p-6 bg-slate-100 min-h-screen">

     <h1 className="text-3xl font-bold mb-6">

      AI Quiz Generator

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

       Generate Quiz

      </button>

     </div>

     {

      loading

      ?

      <Loader />

      :

      <div className="space-y-6">

       {

        quiz.map(

         (item,index)=>(

          <QuizCard

           key={index}

           index={index}

           question={item.question}

           options={item.options}

           selected={answers[index]}

           onSelect={(option)=>

            selectAnswer(

             index,

             option

            )

           }

          />

         )

        )

       }

       {

        quiz.length > 0 &&

        <button

         onClick={submitQuiz}

         className="bg-green-600 text-white px-8 py-3 rounded-lg"

        >

         Submit Quiz

        </button>

       }

       {

        score !== null &&

        <div className="bg-white p-6 rounded-xl shadow">

         <h2 className="text-2xl font-bold text-green-600">

          Score: {score} / {quiz.length}

         </h2>

        </div>

       }

      </div>

     }

    </div>

   </div>

  </div>

 );

}

export default Quiz;