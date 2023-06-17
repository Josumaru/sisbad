import "./Login.css"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/login-image.svg"
const Login = () => {
    const navigate = useNavigate();
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
                            <input className="user-input" type="email" placeholder="User Email" />
                        </div>
                        <div>
                            <input className="user-input" type="password" placeholder="Password"></input>
                        </div>
                        <div className="submit-button">
                            <button className="submit-button">Login</button> 
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    )
}
export default Login;

