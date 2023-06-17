import axios from "axios";
import { useState, useEffect } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import LoginPage from "./LoginPage";

const DashboardPage = () => {
    const [auth, setAuth] = useState(false);
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.post("http://localhost:3001/auth")
            .then((res) => {
                setAuth(res.data.login)
            })
    }, [])
    return  auth ? <Dashboard /> : <LoginPage />
}

export default DashboardPage;