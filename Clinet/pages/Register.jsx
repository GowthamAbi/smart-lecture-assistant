import { useState } from "react";

import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";

import {
  registerUser
}
from "../services/authService";

function Register() {

  const navigate =
    useNavigate();

  const [form, setForm] =
    useState({

      name: "",

      email: "",

      password: "",

      confirmPassword: ""

    });

  const [error, setError] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleChange = (e) => {

    setForm({

      ...form,

      [e.target.name]:
      e.target.value

    });

  };

  const handleSubmit =
  async (e) => {

    e.preventDefault();

    if (

      form.password !==

      form.confirmPassword

    ) {

      setError(
        "Passwords do not match"
      );

      return;

    }

    try {

      setLoading(true);

      setError("");

      await registerUser({

        name: form.name,

        email: form.email,

        password: form.password

      });

      navigate(
        "/login"
      );

    } catch (err) {

      setError(

        err?.response?.data
        ?.message ||

        "Registration Failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="w-full max-w-lg bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">

          Create Account

        </h1>

        <p className="text-center text-gray-500 mb-6">

          Join Smart Lecture Assistant

        </p>

        {error && (

          <div className="bg-red-100 text-red-600 p-3 rounded mb-4">

            {error}

          </div>

        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input

            type="text"

            name="name"

            placeholder="Full Name"

            value={form.name}

            onChange={handleChange}

            className="w-full border rounded-lg p-3"

            required

          />

          <input

            type="email"

            name="email"

            placeholder="Email"

            value={form.email}

            onChange={handleChange}

            className="w-full border rounded-lg p-3"

            required

          />

          <input

            type="password"

            name="password"

            placeholder="Password"

            value={form.password}

            onChange={handleChange}

            className="w-full border rounded-lg p-3"

            required

          />

          <input

            type="password"

            name="confirmPassword"

            placeholder="Confirm Password"

            value={form.confirmPassword}

            onChange={handleChange}

            className="w-full border rounded-lg p-3"

            required

          />

          <button

            type="submit"

            disabled={loading}

            className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"

          >

            {loading

              ? "Creating Account..."

              : "Register"}

          </button>

        </form>

        <p className="text-center mt-5">

          Already have an account?

          <Link

            to="/login"

            className="text-blue-600 ml-2"

          >

            Login

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Register;