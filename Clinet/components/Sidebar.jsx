import {
 Link
}
from "react-router-dom";

function Sidebar() {

 const menuItems = [

  {
   title:"Dashboard",
   path:"/dashboard"
  },

  {
   title:"Upload Lecture",
   path:"/upload"
  },

  {
   title:"Notes",
   path:"/notes"
  },

  {
   title:"Quiz",
   path:"/quiz"
  },

  {
   title:"Flashcards",
   path:"/flashcards"
  },

  {
   title:"Chatbot",
   path:"/chatbot"
  },

  {
   title:"History",
   path:"/history"
  },

  {
   title:"Profile",
   path:"/profile"
  }

 ];

 return (

  <div className="w-64 min-h-screen bg-slate-900 text-white">

   <div className="p-6 text-2xl font-bold border-b border-slate-700">

    AI Assistant

   </div>

   <div className="p-4">

    {

     menuItems.map(

      (item,index)=>(

       <Link

        key={index}

        to={item.path}

        className="block p-3 rounded-lg hover:bg-slate-700 mb-2"

       >

        {item.title}

       </Link>

      )

     )

    }

   </div>

  </div>

 );

}

export default Sidebar;