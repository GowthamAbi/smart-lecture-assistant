import { useEffect,useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import ProfileCard from "../components/ProfileCard";

import {

 getProfile,

 updateProfile

}
from "../services/profileService";

function Profile() {

 const [user,setUser] =
 useState(null);

 const [form,setForm] =
 useState({

  name:"",

  email:""

 });

 useEffect(()=>{

  loadProfile();

 },[]);

 const loadProfile =
 async()=>{

  const data =
  await getProfile();

  setUser(data);

  setForm({

   name:data.name,

   email:data.email

  });

 };

 const saveProfile =
 async()=>{

  await updateProfile(
   form
  );

  alert(
   "Profile Updated"
  );

 };

 return (

  <div className="flex">

   <Sidebar />

   <div className="flex-1">

    <Navbar />

    <div className="p-6 bg-slate-100 min-h-screen">

     <h1 className="text-3xl font-bold mb-6">

      My Profile

     </h1>

     <div className="grid md:grid-cols-2 gap-6">

      <ProfileCard
       user={user}
      />

      <div className="bg-white p-6 rounded-xl shadow">

       <h2 className="text-xl font-bold mb-4">

        Edit Profile

       </h2>

       <input

        value={form.name}

        onChange={(e)=>

         setForm({

          ...form,

          name:e.target.value

         })

        }

        className="border p-3 rounded-lg w-full mb-4"

       />

       <input

        value={form.email}

        onChange={(e)=>

         setForm({

          ...form,

          email:e.target.value

         })

        }

        className="border p-3 rounded-lg w-full mb-4"

       />

       <button

        onClick={saveProfile}

        className="bg-blue-600 text-white px-6 py-3 rounded-lg"

       >

        Save Changes

       </button>

      </div>

     </div>

    </div>

   </div>

  </div>

 );

}

export default Profile;