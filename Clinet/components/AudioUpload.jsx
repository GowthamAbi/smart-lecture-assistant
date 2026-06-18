import { useState, useRef } from "react";
import axios from "axios";

function AudioUpload() {

  const fileInputRef = useRef();

  const [dragActive, setDragActive] =
    useState(false);

  const [file, setFile] =
    useState(null);

  const [progress, setProgress] =
    useState(0);

  const [uploading, setUploading] =
    useState(false);

  const handleFile = (selectedFile) => {

    if (!selectedFile) return;

    setFile(selectedFile);

  };

  const handleDrop = (e) => {

    e.preventDefault();

    setDragActive(false);

    const selectedFile =
      e.dataTransfer.files[0];

    handleFile(selectedFile);

  };

  const uploadAudio = async () => {

    if (!file) return;

    const formData =
      new FormData();

    formData.append(
      "audio",
      file
    );

    try {

      setUploading(true);

      await axios.post(

        "http://localhost:5000/api/lectures/upload",

        formData,

        {

          onUploadProgress:
          (progressEvent) => {

            const percent =

              Math.round(

                (
                  progressEvent.loaded * 100
                )

                /

                progressEvent.total

              );

            setProgress(percent);

          }

        }

      );

      alert(
        "Audio Uploaded Successfully"
      );

    } catch (error) {

      console.log(error);

      alert(
        "Upload Failed"
      );

    } finally {

      setUploading(false);

    }

  };

  return (

    <div className="bg-white p-6 rounded-xl shadow">

      <div

        onDragOver={(e) => {

          e.preventDefault();

          setDragActive(true);

        }}

        onDragLeave={() =>

          setDragActive(false)

        }

        onDrop={handleDrop}

        className={`

        border-2

        border-dashed

        rounded-xl

        p-10

        text-center

        cursor-pointer

        transition-all

        ${

          dragActive

            ? "border-blue-500 bg-blue-50"

            : "border-gray-300"

        }

        `}

      >

        <input

          type="file"

          accept=".mp3,.wav,.m4a"

          hidden

          ref={fileInputRef}

          onChange={(e) =>

            handleFile(

              e.target.files[0]

            )

          }

        />

        <button

          onClick={() =>

            fileInputRef.current.click()

          }

          className="bg-blue-500 text-white px-6 py-2 rounded-lg"

        >

          Select Audio File

        </button>

        <p className="mt-4 text-gray-500">

          Drag & Drop Audio Here

        </p>

      </div>

      {file && (

        <div className="mt-6">

          <h3 className="font-semibold">

            Selected File

          </h3>

          <p>

            {file.name}

          </p>

          <audio

            controls

            className="mt-3 w-full"

          >

            <source

              src={URL.createObjectURL(file)}

            />

          </audio>

        </div>

      )}

      {uploading && (

        <div className="mt-6">

          <div className="w-full bg-gray-200 rounded-full h-4">

            <div

              className="bg-green-500 h-4 rounded-full"

              style={{

                width:

                `${progress}%`

              }}

            />

          </div>

          <p className="mt-2">

            {progress}% Uploaded

          </p>

        </div>

      )}

      <button

        onClick={uploadAudio}

        disabled={!file}

        className="mt-6 bg-green-600 text-white px-6 py-3 rounded-lg disabled:bg-gray-400"

      >

        Upload Lecture

      </button>

    </div>

  );

}

export default AudioUpload;