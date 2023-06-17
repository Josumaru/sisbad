import "./Login.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/login-image.svg"
import axios from "axios"

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e, email, password) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3001/login?email=${email}&password=${password}`)
        console.log(res.data)
        if (res.data.message === "success") {
            navigate("/dashboard");
        }
    }
    return (
        <div className="login-page">
            <div className="login-section">
                <div className="login-section-right">
                    <img src={logo}></img>
                </div>
                <div className="login-section-left">
                    <h1>Get's Started.</h1>
                    <div className="navigate-link">
                        <p>Not a Member?</p>
                        <span style={{color:"#fe715d", cursor:"pointer", marginLeft:"5px"}} onClick={() => { navigate("/register") }}>Register</span>
                    </div>
                    <form className="user-login">
                        <div>
                            <input onChange={(e) => {setEmail(e.target.value) }} className="user-input" type="email" placeholder="User Email" />
                        </div>
                        <div>
                            <input onChange={(e) => {setPassword(e.target.value) }} className="user-input" type="password" placeholder="Password"></input>
                        </div>
                        <div className="submit-button">
                            <button className="submit-button" onClick={(e) => { handleSubmit(e, email, password) }}>Login</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    )
}
export default Login;

