import "./Register.css"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/register-image.svg"
import { useRef, useState } from "react";
import axios from "axios"
const Register = () => {
    const statusReff = useRef();
    const navigate = useNavigate();
    const [name, setName] = useState()
    const [id, setId] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [verifyPassword, setVerifyPassword] = useState()
    const handleSubmit = async (e, name, id, email, password, verifyPassword) => {
        e.preventDefault();
        if (password === verifyPassword) {
            console.log(password)
                const res = await axios.post(`http://localhost:3001/register?name=${name}&id=${id}&email=${email}&password=${password}`)
                if (res.data.message === "success") {
                    navigate("/login");
                }

                console.log("something wrong")
                statusReff.current.innerHTML = "ID Already used!";
                statusReff.current.style.color = "red";
            
        }
    }
    return (
        <div className="login-page">
            <div className="login-section">
                <div className="login-section-right">
                    <img src={logo}></img>
                </div>
                <div className="login-section-left">
                    <h1 ref={statusReff}>Nothing last Forever!</h1>
                    <div className="navigate-link">
                        <p>Already have an Account?</p>
                        <span style={{ color: "#fe715d", cursor: "pointer", marginLeft: "5px" }} onClick={() => { navigate("/login") }}>Login</span>
                    </div>
                    <form className="user-login">
                        <div>
                            <input onChange={(e) => { setName(e.target.value) }} className="user-input" type="text" placeholder="Name" />
                        </div>
                        <div>
                            <input onChange={(e) => { setId(e.target.value) }} className="user-input" type="text" placeholder="ID-Member" />
                        </div>
                        <div>
                            <input onChange={(e) => { setEmail(e.target.value) }} className="user-input" type="email" placeholder="User Email" />
                        </div>
                        <div>
                            <input onChange={(e) => { setPassword(e.target.value) }} className="user-input" type="password" placeholder="Password"></input>
                        </div>
                        <div>
                            <input onChange={(e) => { setVerifyPassword(e.target.value) }} className="user-input" type="password" placeholder="Retype Your Password"></input>
                        </div>
                        <div className="submit-button">
                            <button onClick={(e) => { handleSubmit(e, name, id, email, password, verifyPassword ) }} className="submit-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;