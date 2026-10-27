
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const isLoggedIn =
    localStorage.getItem("booknest-logged-in") === "true";

  return isLoggedIn ? <Outlet /> : <Navigate to="/login" replace />;
}
