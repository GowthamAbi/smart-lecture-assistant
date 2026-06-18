function ProfileCard({

 user

}) {

 return (

  <div className="bg-white p-6 rounded-xl shadow">

   <div className="flex flex-col items-center">

    <div className="w-24 h-24 rounded-full bg-blue-500 text-white flex items-center justify-center text-4xl font-bold">

     {

      user?.name?.charAt(0)

     }

    </div>

    <h2 className="text-2xl font-bold mt-4">

     {user?.name}

    </h2>

    <p className="text-gray-500">

     {user?.email}

    </p>

   </div>

  </div>

 );

}

export default ProfileCard;