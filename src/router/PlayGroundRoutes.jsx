import { Route, Routes, Navigate } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import GuestRoutes from "./GuestRoutes";

const PlayGroundRouter = () => {
  const token = localStorage.getItem("accessToken");

  return (
    <Routes>
      {token ? (
        <>
          <Route path="/*" element={<AuthRoutes />} />
          <Route path="/login" element={<Navigate to="/profile" replace />} />
          <Route
            path="/register"
            element={<Navigate to="/profile" replace />}
          />
        </>
      ) : (
        <>
          <Route path="/*" element={<GuestRoutes />} />
          <Route path="/profile" element={<Navigate to="/login" replace />} />
        </>
      )}
    </Routes>
  );
};

export default PlayGroundRouter;
