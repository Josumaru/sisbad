import axios from "axios";
import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login/Login";
import LoginPage from "./LoginPage";

const DashboardPage = () => {
    const navigate = useNavigate()
    const [auth, setAuth] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.post("http://localhost:3001/auth")
            .then((res) => {
                setAuth(res.data.login)
            })
    }, [])
    useEffect(() => {
        if (!auth) navigate("/")
    }, [auth])

    if (auth) {
        navigate("/login") 
        return <Dashboard />

    } else {
        navigate("/")
        return null

    }
}

export default DashboardPage;