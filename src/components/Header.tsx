import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            justifyContent: "space-between"
        }}>
            <Button onClick={() => navigate('/notification')}>Notification</Button>
            <Button onClick={() => {
                localStorage.removeItem('login');
                navigate('/');
            }}>Logout</Button>
        </div>
    )
}

export default Header;