import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Navbar() {

  const { user, logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = () => {

    logout();

    navigate("/login");

  };

  return (

    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center">

      <h1 className="text-2xl font-bold text-blue-600">

        Smart Lecture Assistant

      </h1>

      <div className="flex items-center gap-4">

        <span className="font-medium">

          {user?.name}

        </span>

        <button

          onClick={handleLogout}

          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"

        >

          Logout

        </button>

      </div>

    </nav>

  );

}

export default Navbar;