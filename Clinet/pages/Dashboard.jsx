import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import StatCard from "../components/StatCard";

function Dashboard() {

 const stats = [

  {
   title:"Lectures",
   value:25,
   color:"text-blue-500"
  },

  {
   title:"Notes Generated",
   value:18,
   color:"text-green-500"
  },

  {
   title:"Quizzes",
   value:12,
   color:"text-purple-500"
  },

  {
   title:"Flashcards",
   value:30,
   color:"text-orange-500"
  }

 ];

 const recentLectures = [

  "Machine Learning Basics",

  "Deep Learning Introduction",

  "Data Structures",

  "React Fundamentals"

 ];

 return (

  <div className="flex">

   <Sidebar />

   <div className="flex-1">

    <Navbar />

    <div className="p-6 bg-slate-100 min-h-screen">

     <h1 className="text-3xl font-bold mb-6">

      Dashboard

     </h1>

     <div className="grid md:grid-cols-4 gap-5">

      {

       stats.map(

        (item,index)=>(

         <StatCard

          key={index}

          title={item.title}

          value={item.value}

          color={item.color}

         />

        )

       )

      }

     </div>

     <div className="grid md:grid-cols-2 gap-6 mt-8">

      <div className="bg-white shadow rounded-xl p-6">

       <h2 className="text-xl font-bold mb-4">

        Recent Lectures

       </h2>

       {

        recentLectures.map(

         (lecture,index)=>(

          <div

           key={index}

           className="border-b py-3"

          >

           {lecture}

          </div>

         )

        )

       }

      </div>

      <div className="bg-white shadow rounded-xl p-6">

       <h2 className="text-xl font-bold mb-4">

        Quick Actions

       </h2>

       <div className="space-y-3">

        <button className="w-full bg-blue-500 text-white p-3 rounded-lg">

         Upload New Lecture

        </button>

        <button className="w-full bg-green-500 text-white p-3 rounded-lg">

         Generate Notes

        </button>

        <button className="w-full bg-purple-500 text-white p-3 rounded-lg">

         Generate Quiz

        </button>

        <button className="w-full bg-orange-500 text-white p-3 rounded-lg">

         Open AI Chatbot

        </button>

       </div>

      </div>

     </div>

    </div>

   </div>

  </div>

 );

}

export default Dashboard;