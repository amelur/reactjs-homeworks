import {Navigate, Outlet} from "react-router-dom";
import {useAppSelector} from '../store/hooks'


const ProtectedRoute = () => {
    const user = useAppSelector((state) => state.auth.user);

    if (!user) {
        return <Navigate to="/login" replace/>;
    }

    return <Outlet/>;
};

export default ProtectedRoute;
