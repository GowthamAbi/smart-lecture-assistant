import api from "../utils/api";

export const sendMessage = async (

  lectureId,

  message

) => {

  const response = await api.post(

    "/chatbot/ask",

    {

      lectureId,

      message

    }

  );

  return response.data;

};