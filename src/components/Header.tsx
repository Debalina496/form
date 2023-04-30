import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { isLogedIn } from "../redux/actions";
import axios from "axios";

const Header = () => {
    const navigate = useNavigate();
const  dispatch = useDispatch();


const handleLogout = async () => {
    await axios.post("/api/logout", {})
    .then((res) => {
        dispatch(isLogedIn(false))
        navigate('/');
    })
    .catch((err) => {
        console.log(err); 
    })
}
    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Button onClick={() => navigate('/notification')}>Notification</Button>
            <Button onClick={handleLogout}>Logout</Button>
        </div>
    )
}

export default Header;