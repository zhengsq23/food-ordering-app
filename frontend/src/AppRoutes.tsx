import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout>home page</Layout>} />
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
