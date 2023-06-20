import axios from "axios";
import Dashboard from "../components/Dashboard/Dashboard";
import DashboardAdmin from "../components/DashboardAdmin/DashboardAdmin";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:3001/auth")
        .then((res) => {
            if (res.data.login) return console.log(res);
            return navigate("/login");
        })
        // axios.post("http://localhost:3001/auth")
        // .then((res) => {
        //     if (res.data.login) return;
        //     return navigate("/login");
        // })
    
    return <DashboardAdmin />
}

export default DashboardPage;