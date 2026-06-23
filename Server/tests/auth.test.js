import request from "supertest";

import app from "../server.js";

describe(

 "Auth Routes",

 ()=>{

  test(

   "Register User",

   async()=>{

    const res =
    await request(app)

    .post(
     "/api/auth/register"
    )

    .send({

     name:"Test",

     email:"test@test.com",

     password:"123456"

    });

    expect(
     res.statusCode
    ).toBe(201);

   }

  );

 }
);