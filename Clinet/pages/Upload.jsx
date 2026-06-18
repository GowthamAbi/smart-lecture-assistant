import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AudioUpload from "../components/AudioUpload";

function Upload() {

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="p-6 bg-slate-100 min-h-screen">

          <h1 className="text-3xl font-bold mb-6">

            Upload Lecture

          </h1>

          <AudioUpload />

        </div>

      </div>

    </div>

  );

}

export default Upload;