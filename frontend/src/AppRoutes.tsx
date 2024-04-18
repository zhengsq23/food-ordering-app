import { Navigate, Route, Routes } from "react-router-dom";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<span>Home page</span>} />
      <Route path="/user-profile" element={<span>User profile</span>} />
      <Route
        path="*"
        element={
          <span>
            <Navigate to="/" />
          </span>
        }
      />
    </Routes>
  );
};

export default AppRoutes
