import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

import { loginUser } from "../services/authService";
import { useAuth } from "../context/AuthContext";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [form, setForm] = useState({

    email: "",
    password: ""

  });

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

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

    try {

      setLoading(true);

      setError("");

      const data =
        await loginUser(form);

      login(
        data.token,
        data.user
      );

      navigate(
        "/dashboard"
      );

    } catch (err) {

      setError(

        err?.response?.data
        ?.message ||

        "Login Failed"

      );

    } finally {

      setLoading(false);

    }

  };

  return (

    <div className="min-h-screen flex items-center justify-center bg-slate-100">

      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg">

        <h1 className="text-3xl font-bold text-center mb-2">

          Welcome Back

        </h1>

        <p className="text-center text-gray-500 mb-6">

          Login to continue

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

            type="email"

            name="email"

            placeholder="Email"

            value={form.email}

            onChange={handleChange}

            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"

            required

          />

          <input

            type="password"

            name="password"

            placeholder="Password"

            value={form.password}

            onChange={handleChange}

            className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-blue-500"

            required

          />

          <button

            type="submit"

            disabled={loading}

            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"

          >

            {loading
              ? "Logging In..."
              : "Login"}

          </button>

        </form>

        <p className="text-center mt-5">

          Don't have an account?

          <Link

            to="/register"

            className="text-blue-600 ml-2"

          >

            Register

          </Link>

        </p>

      </div>

    </div>

  );

}

export default Login;