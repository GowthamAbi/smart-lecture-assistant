import PDFDocument from "pdfkit";
import fs from "fs";
import path from "path";

export const generatePDF = (
  lecture,
  summary
) => {

  return new Promise((resolve,reject)=>{

    const pdfDir =
    "generated/pdfs";

    if(
      !fs.existsSync(pdfDir)
    ){

      fs.mkdirSync(
        pdfDir,
        { recursive:true }
      );

    }

    const fileName =
    `${lecture._id}.pdf`;

    const filePath =
    path.join(
      pdfDir,
      fileName
    );

    const doc =
    new PDFDocument();

    const stream =
    fs.createWriteStream(
      filePath
    );

    doc.pipe(stream);

    doc.fontSize(24);

    doc.text(
      "Smart Lecture Assistant"
    );

    doc.moveDown();

    doc.fontSize(18);

    doc.text(
      `Lecture: ${lecture.title}`
    );

    doc.moveDown();

    doc.fontSize(16);

    doc.text(
      "AI Generated Notes"
    );

    doc.moveDown();

    doc.fontSize(12);

    doc.text(summary);

    doc.end();

    stream.on(
      "finish",
      ()=>resolve(filePath)
    );

    stream.on(
      "error",
      reject
    );

  });

};
import api from "../utils/api";

export const downloadPDF =
async(id)=>{

 const response =
 await api.get(

  `/pdf/download/${id}`,

  {
   responseType:"blob"
  }

 );

 return response.data;

};