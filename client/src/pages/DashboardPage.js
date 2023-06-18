import axios from "axios";
import Dashboard from "../components/Dashboard/Dashboard";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/auth")
        .then((res) => {
            if (res.data.login) return;
            return navigate("/login");
        })
    return <Dashboard />
}

export default DashboardPage;