import api from "../utils/api";

export const getLectureHistory =
async ()=>{

 const response =
 await api.get(
  "/lectures/history"
 );

 return response.data;

};

export const deleteLecture =
async(id)=>{

 const response =
 await api.delete(
  `/lectures/${id}`
 );

 return response.data;

};