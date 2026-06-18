import { useState } from "react";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

import ChatMessage from "../components/ChatMessage";
import TypingIndicator from "../components/TypingIndicator";

import {
  sendMessage
}
from "../services/chatbotService";

function Chatbot() {

  const [lectureId,setLectureId] =
    useState("");

  const [message,setMessage] =
    useState("");

  const [loading,setLoading] =
    useState(false);

  const [messages,setMessages] =
    useState([]);

  const askAI = async () => {

    if (

      !lectureId ||

      !message

    ) {

      return;

    }

    const userMessage = {

      sender:"user",

      message

    };

    setMessages(

      (prev)=>

      [

        ...prev,

        userMessage

      ]

    );

    try {

      setLoading(true);

      const response =

      await sendMessage(

        lectureId,

        message

      );

      setMessages(

        (prev)=>

        [

          ...prev,

          {

            sender:"ai",

            message:
            response.answer

          }

        ]

      );

      setMessage("");

    }

    catch(error){

      console.log(error);

      alert(
        "Failed To Get Response"
      );

    }

    finally{

      setLoading(false);

    }

  };

  return (

    <div className="flex">

      <Sidebar />

      <div className="flex-1">

        <Navbar />

        <div className="bg-slate-100 min-h-screen p-6">

          <h1 className="text-3xl font-bold mb-6">

            AI Lecture Chatbot

          </h1>

          <div className="bg-white rounded-xl shadow p-4 mb-4">

            <input

              type="text"

              placeholder="Lecture ID"

              value={lectureId}

              onChange={(e)=>

                setLectureId(

                  e.target.value

                )

              }

              className="border p-3 rounded-lg w-full"

            />

          </div>

          <div

            className="bg-white rounded-xl shadow p-4 h-[500px] overflow-y-auto"

          >

            {

              messages.map(

                (msg,index)=>(

                  <ChatMessage

                    key={index}

                    sender={msg.sender}

                    message={msg.message}

                  />

                )

              )

            }

            {

              loading &&

              <TypingIndicator />

            }

          </div>

          <div className="mt-4 flex gap-3">

            <input

              type="text"

              placeholder="Ask about the lecture..."

              value={message}

              onChange={(e)=>

                setMessage(

                  e.target.value

                )

              }

              className="flex-1 border p-3 rounded-lg"

            />

            <button

              onClick={askAI}

              className="bg-blue-600 text-white px-8 rounded-lg"

            >

              Send

            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default Chatbot;