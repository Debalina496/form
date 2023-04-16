import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";

const Home = () => {

    const [userDetails, setUserDatails] = useState<Record<string, string>>({});

    useEffect(() => {
            axios.get('/api/profile')
        .then((response: Record<string, any>) => {
            setUserDatails(response.data.user);
        })
        .catch((err: any) => {
            console.log(err); 
        })
        
    }, []);

    return (
        <>
            <Header />
            <h3>Name : {userDetails.name} </h3>
            <h3>Email : {userDetails.email} </h3>
        </>
    )
}

export default Home;