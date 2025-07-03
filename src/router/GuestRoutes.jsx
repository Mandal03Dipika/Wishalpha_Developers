import { Navigate, Route, Routes } from "react-router-dom";
import GuestLayout from "../layouts/GuestLayout/GuestLayout";
import { Home } from "../modules/Home";
import { About } from "../modules/About";
import { Contact } from "../modules/Contact";
import { Support } from "../modules/Support";
import AuthContextProvider from "../modules/Auth/context/AuthContextProvider";
import { Login, Register } from "../modules/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const GuestRoutes = () => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<GuestLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/support" element={<Support />} />
          </Route>
          <Route
            path="/login"
            element={
              <AuthContextProvider>
                <Login />
              </AuthContextProvider>
            }
          />
          <Route
            path="/register"
            element={
              <AuthContextProvider>
                <Register />
              </AuthContextProvider>
            }
          />
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default GuestRoutes;
