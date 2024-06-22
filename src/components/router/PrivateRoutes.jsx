import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({children}) => {
    const {user , loading} = useContext(AuthContext)

    if (loading) {
       return <><span className="loading loading-ring loading-xs"></span><span className="loading loading-ring loading-sm"></span><span className="loading loading-ring loading-md"></span><span className="loading loading-ring loading-lg"></span></> 
    }

    if (user?.email) {
        return children;
    } return <Navigate to="/login" replace></Navigate>
};

export default PrivateRoutes;