function NoteCard({

 title,

 content

}) {

 return (

  <div className="bg-white rounded-xl shadow-md p-6">

   <h2 className="text-xl font-bold mb-4">

    {title}

   </h2>

   <div className="text-gray-700 whitespace-pre-wrap">

    {content}

   </div>

  </div>

 );

}

export default NoteCard;