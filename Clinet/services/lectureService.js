import api from "../utils/api";

export const uploadLecture =
async (formData) => {

  const response =
    await api.post(

      "/lectures/upload",

      formData,

      {

        headers: {

          "Content-Type":

          "multipart/form-data"

        }

      }

    );

  return response.data;

};

export const getLectures =
async () => {

  const response =
    await api.get(
      "/lectures"
    );

  return response.data;

};