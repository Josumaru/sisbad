import "./Register.css"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    return (
        <div className="login-page">
            <div className="login-section">
                <div className="login-section-right">

                </div>
                <div className="login-section-left">
                    <h1>Nothing last Forever!</h1>
                    <div className="navigate-link">
                        <p>Already have an Account?</p>
                        <span style={{ color: "#fe715d", cursor: "pointer" }} onClick={() => { navigate("/login") }}>Login</span>
                    </div>
                    <form className="user-login">
                        <div>
                            <input className="user-input" type="text" placeholder="Name" />
                        </div>
                        <div>
                            <input className="user-input" type="text" placeholder="ID-Library" />
                        </div>
                        <div>
                            <input className="user-input" type="email" placeholder="User Email" />
                        </div>
                        <div>
                            <input className="user-input" type="password" placeholder="Password"></input>
                        </div>
                        <div>
                            <input className="user-input" type="password" placeholder="Retype Your Password"></input>
                        </div>
                        <div className="submit-button">
                            <button className="submit-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;