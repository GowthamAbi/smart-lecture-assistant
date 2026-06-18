import api from "../utils/api";

export const generateNotes =
async (lectureId) => {

 const response =
 await api.post(

 `/notes/generate/${lectureId}`

 );

 return response.data;

};

export const getLectureNotes =
async (lectureId) => {

 const response =
 await api.get(

 `/notes/${lectureId}`

 );

 return response.data;

};