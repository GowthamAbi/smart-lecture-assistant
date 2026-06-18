function ChatMessage({

  sender,

  message

}) {

  const isUser =
    sender === "user";

  return (

    <div

      className={`flex mb-4

      ${

        isUser

        ? "justify-end"

        : "justify-start"

      }

      `}

    >

      <div

        className={`

        max-w-lg

        px-4

        py-3

        rounded-2xl

        ${

          isUser

          ?

          "bg-blue-500 text-white"

          :

          "bg-white shadow"

        }

        `}

      >

        {message}

      </div>

    </div>

  );

}

export default ChatMessage;