import { useEffect,useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import {

 getLectureHistory,

 deleteLecture

}
from "../services/historyService";

function History() {

 const [lectures,setLectures] =
 useState([]);

 useEffect(()=>{

  loadLectures();

 },[]);

 const loadLectures =
 async()=>{

  try{

   const data =
   await getLectureHistory();

   setLectures(data);

  }

  catch(error){

   console.log(error);

  }

 };

 const removeLecture =
 async(id)=>{

  const confirmDelete =
  window.confirm(
   "Delete Lecture?"
  );

  if(!confirmDelete) return;

  await deleteLecture(id);

  loadLectures();

 };

 return (

  <div className="flex">

   <Sidebar />

   <div className="flex-1">

    <Navbar />

    <div className="p-6 bg-slate-100 min-h-screen">

     <h1 className="text-3xl font-bold mb-6">

      Lecture History

     </h1>

     <div className="bg-white rounded-xl shadow overflow-hidden">

      <table className="w-full">

       <thead>

        <tr className="bg-gray-100">

         <th className="p-4 text-left">

          Title

         </th>

         <th className="p-4 text-left">

          Date

         </th>

         <th className="p-4 text-left">

          Actions

         </th>

        </tr>

       </thead>

       <tbody>

        {

         lectures.map(

          (lecture)=>(

           <tr

            key={lecture._id}

            className="border-t"

           >

            <td className="p-4">

             {lecture.title}

            </td>

            <td className="p-4">

             {

              new Date(

               lecture.createdAt

              ).toLocaleDateString()

             }

            </td>

            <td className="p-4">

             <button

              onClick={()=>

               removeLecture(

                lecture._id

               )

              }

              className="bg-red-500 text-white px-4 py-2 rounded"

             >

              Delete

             </button>

            </td>

           </tr>

          )

         )

        }

       </tbody>

      </table>

     </div>

    </div>

   </div>

  </div>

 );

}

export default History;