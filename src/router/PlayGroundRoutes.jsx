import { useEffect, useState } from "react";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";

const PlayGroundRoutes = () => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
  
    if (token) {
      localStorage.setItem("accessToken", token);
      setToken(token); 
  
      const cleanUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);
  


  useEffect(() => {
    const handleStorageChange = () => {
      setToken(localStorage.getItem("accessToken"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return token ? <AuthRoutes /> : <GuestRoutes />;
};

export default PlayGroundRoutes;
