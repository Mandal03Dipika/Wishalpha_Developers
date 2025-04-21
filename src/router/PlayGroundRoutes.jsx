import { useEffect, useState } from "react";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";

const PlayGroundRoutes = () => {
  const [token, setToken] = useState(localStorage.getItem("accessToken"));

  console.log("Initial Access Token from localStorage:", token);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    console.log("Token from URL:", token);

    if (token) {
      localStorage.setItem("accessToken", token);
      setToken(token);

      const cleanUrl = window.location.origin + window.location.pathname;
      console.log("Clean URL:", cleanUrl);
      window.history.replaceState({}, document.title, cleanUrl);
    }
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const storedToken = localStorage.getItem("accessToken");
      console.log("Access Token from localStorage on storage change:", storedToken);
      setToken(storedToken);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  return token ? <AuthRoutes /> : <GuestRoutes />;
};

export default PlayGroundRoutes;