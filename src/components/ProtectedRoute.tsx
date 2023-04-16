import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props: any) => {
    const navigate = useNavigate();
    console.log(props)
    const Component = props.component;

    useEffect(() => {
        const login = localStorage.getItem('login');
        if(!login) {
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