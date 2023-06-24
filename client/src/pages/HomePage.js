import Home from "../components/Home/Home"
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const HomePage = () => {
    let [login, setLogin] = useState('');
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    
    useEffect(() => {
        axios.post("http://localhost:3001/auth")
            .then((res) => {
                console.log(res)
                setLogin(res.data.login)
                if (!res.data.login) return navigate("/login");
        })
        .catch((error) => {
            console.error("Error: ", error);
            navigate("/login");
          });
    },[navigate])
    if (login) {
        return <Home />
    }
    
}

export default HomePage;