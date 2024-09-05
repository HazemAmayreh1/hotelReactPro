import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes = () => {
  const token = localStorage.getItem("guestEmail");  // You can use your own logic for authentication

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
