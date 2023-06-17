import Register from "../components/Register/Register"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.post("http://localhost:3001/auth")
            .then((res) => {
                setAuth(res.data.login)
                if (auth) return <RegisterPage />
                navigate("/");
            })
    }, []) 
}
export default RegisterPage;