import { ComponentType, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props: any) => {
    const Component = props.component;
    const navigate = useNavigate();

    const isLogin = useSelector((state: Record<string, any>) => state.reducers.isLoggedIn);
    console.log("calling protected", isLogin);
    
    

    useEffect(() => {
        if(!isLogin) {
            navigate('/');
        }
    })

    return (
        <>
            <Component />
        </>


    )
}

export default ProtectedRoute;