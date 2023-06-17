import Login from "../components/Login/Login"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Dashboard from "../components/Dashboard/Dashboard";

const LoginPage = () => {
    const navigate = useNavigate()
    let [auth, setAuth] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.post("http://localhost:3001/auth")
            .then((res) => {
                setAuth(res.data.login)
            })
    }, [])
    useEffect(() => {
        if (auth) navigate("/dashboard");
    }, [auth])
    return <Login />
}

export default LoginPage;