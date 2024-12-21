import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../providers/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const AdminRoute = ({children}) => {

    const [user, loading] = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation()

     if (loading || isAdminLoading) {
       return (
         <span className="loading loading-ring loading-lg flex items-center text-center"></span>
       );
     }
     if (user && isAdmin) {
       return children;
     }

     return (
       <Navigate to="/login" state={{ from: location }} replace></Navigate>
     );
};

export default AdminRoute;