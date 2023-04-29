import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import { useDispatch, useSelector } from "react-redux";
import { saveNotification } from "../redux/actions";
import { Button } from "@mui/material";
import UpdateProfile from "./UpdateProfile";
import UpdatePassword from "./UpdatePassword";

const Home = () => {
    const [userDetails, setUserDatails] = useState<Record<string, string>>({});
    const isLogin = useSelector((state: Record<string, any>) => state.reducers.isLoggedIn);
    console.log("calling home", isLogin);
    

    useEffect(() => {
        axios.get('/api/profile')
        .then((response: Record<string, any>) => {
            setUserDatails(response.data.user);
        })
        .catch((err: any) => {
            console.log(err); 
        })
        
    }, []);

    // useSelector((state: Array<Record<string, string>>) => console.log("state", state));



    return (
        <>
            <Header />
            <h3>Name : {userDetails.name} </h3>
            <h3>Email : {userDetails.email} </h3>
            <UpdateProfile />
            {/* <Button variant="contained" style={{margin: '20px'}}>Update Password</Button> */}
            <UpdatePassword />
        </>
    )
}

export default Home;