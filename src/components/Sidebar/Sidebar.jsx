import {
  Menu,
  X,
  LayoutDashboard,
  User,
  Code,
  Gamepad2,
  FolderKanban,
  Settings,
  LogOut,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logoutService } from "../../modules/Auth/services/auth";

function Sidebar({ isOpen, setIsOpen }) {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    const res = await logoutService();
    console.log(res);
    navigate("/login");
  };

  return (
    <>
      {!isOpen && (
        <button
          className="p-3 bg-gray-800 text-white rounded-full fixed top-6 left-6 z-50 shadow-lg 
          hover:bg-gray-700 transition-all duration-300 ease-in-out"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={28} />
        </button>
      )}
      <div
        className={`fixed top-0 left-0 h-screen w-64 bg-gray-900 text-white shadow-lg transform 
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out border-r-4 border-gray-700`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <span className="text-2xl font-bold tracking-wide">
            🎮 Developers
          </span>
          <button
            className="p-2 text-white hover:bg-gray-700 rounded-md transition"
            onClick={() => setIsOpen(false)}
          >
            <X size={28} />
          </button>
        </div>
        <div className="p-6 space-y-6 text-lg font-medium">
          <Link
            to="/"
            className="p-3 flex items-center space-x-3 hover:bg-gray-700 rounded-md cursor-pointer transition"
          >
            <LayoutDashboard size={20} /> <span>Dashboard</span>
          </Link>
          <Link
            to="/profile"
            className="p-3 flex items-center space-x-3 hover:bg-gray-700 rounded-md cursor-pointer transition"
          >
            <User size={20} /> <span>Profile</span>
          </Link>
          <Link
            to="/developers"
            className="p-3 flex items-center space-x-3 hover:bg-gray-700 rounded-md cursor-pointer transition"
          >
            <Code size={20} /> <span>Developers</span>
          </Link>
          <Link
            to="/games"
            className="p-3 flex items-center space-x-3 hover:bg-gray-700 rounded-md cursor-pointer transition"
          >
            <Gamepad2 size={20} /> <span>Games</span>
          </Link>
          <Link
            to="/projects"
            className="p-3 flex items-center space-x-3 hover:bg-gray-700 rounded-md cursor-pointer transition"
          >
            <FolderKanban size={20} /> <span>Projects</span>
          </Link>
          <Link
            to="/setting"
            className="p-3 flex items-center space-x-3 hover:bg-gray-700 rounded-md cursor-pointer transition"
          >
            <Settings size={20} /> <span>Settings</span>
          </Link>
          <button
            onClick={handleLogout}
            className="p-3 flex items-center space-x-3 hover:bg-gray-700 rounded-md cursor-pointer transition w-full text-left"
          >
            <LogOut size={20} /> <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
