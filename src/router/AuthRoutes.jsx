import { Navigate, Route, Routes } from "react-router-dom";
import AuthLayout from "../layouts/AuthLayout/AuthLayout";
import { Dashboard } from "../modules/Dashboard";
import DashboardContextProvider from "../modules/Dashboard/context/DashboardContextProvider";
import { Developers } from "../modules/Developers";
import { Settings } from "../modules/Settings";
import GamesContextProvider from "../modules/Games/context/GamesContextProvider";
import { Games } from "../modules/Games";
import AuthContextProvider from "../modules/Auth/context/AuthContextProvider";
import { DeveloperProfile, EditProfile } from "../modules/Auth";
import ProjectContextProvider from "../modules/Project/context/ProjectContextProvider";
import { CreateProject, Projects } from "../modules/Project";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MaintenancePage from "@/components/Default/Maintainance";

const queryClient = new QueryClient();

const AuthRoutes = () => {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route
              path="/"
              element={
                <DashboardContextProvider>
                  <Dashboard />
                </DashboardContextProvider>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthContextProvider>
                  <DeveloperProfile />
                </AuthContextProvider>
              }
            />
            <Route path="/developers" element={<Developers />} />
            <Route path="/setting" element={<MaintenancePage />} />
            <Route path="/maintainance" element={<MaintenancePage />} />
            <Route
              path="/games"
              element={
                <GamesContextProvider>
                  <Games />
                </GamesContextProvider>
              }
            />
            <Route path="/projects" element={<MaintenancePage />} />
            <Route
              path="/create-project"
              element={
                <ProjectContextProvider>
                  <CreateProject />
                </ProjectContextProvider>
              }
            />
            <Route
              path="/edit-profile"
              element={
                <AuthContextProvider>
                  <EditProfile />
                </AuthContextProvider>
              }
            />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
};

export default AuthRoutes;
