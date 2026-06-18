import api from "../utils/api";

export const generateFlashcards =
async (lectureId)=>{

 const response =
 await api.post(

  `/flashcards/generate/${lectureId}`

 );

 return response.data;

};