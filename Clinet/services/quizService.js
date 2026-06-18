import api from "../utils/api";

export const generateQuiz =
async (lectureId) => {

  const response =
  await api.post(

    `/quiz/generate/${lectureId}`

  );

  return response.data;

};