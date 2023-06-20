import axios from "axios";
import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    let [admin, setAdmin] = useState('');
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        axios.post("http://localhost:3001/auth")
        .then((res) => {
                if (res.data.role === "admin") {
                    setAdmin(true)
                } else {
                    setAdmin(false)
                }
                if (!res.data.login) return navigate("/login");
        })
        .catch((error) => {
            console.error("Error: ", error);
            navigate("/login");
          });
    },[navigate])

    return (
        <div>
            {admin ? <DashboardAdmin /> : <Dashboard /> }
        </div>
    )
    
}

export default DashboardPage;