import Register from "../components/Register/Register"
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginPage = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/auth")
        .then((res) => {
            if (res.data.login) navigate("/");
            return;
        })
    return <Register />
}
export default LoginPage;