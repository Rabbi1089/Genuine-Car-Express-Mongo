import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext)
    const location = useLocation();
    console.log(location.pathname)

    // if (loading) {
    //    return <><span className="loading loading-ring loading-xs"></span><span className="loading loading-ring loading-sm"></span><span className="loading loading-ring loading-md"></span><span className="loading loading-ring loading-lg"></span></> 
    // }

    if (user?.email) {
        return children;
    } 

    return <Navigate state={location.pathname} to="/login" replace></Navigate>;
    
};

export default PrivateRoutes;

