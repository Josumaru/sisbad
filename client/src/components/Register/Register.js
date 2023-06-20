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
            let nid = id.replace(/e/gi, '');
            console.log(nid)
            if (nid == undefined || nid == '') return statusReff.current.innerHTML = `ID can be ${id}`; statusReff.current.style.color = "red";
            const res = await axios.post(`http://localhost:3001/register?name=${name}&id=${nid}&email=${email}&password=${password}`)
            if (res.data.message === "success") {
                navigate("/login");
            } else {
                statusReff.current.innerHTML = "ID or Email Already used!";
                statusReff.current.style.color = "red";
            }
        } else {
            statusReff.current.innerHTML = "Password doesn't match !";
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
                    <h1 style={{ fontSize: "30px" }} ref={statusReff}>Nothing last Forever!</h1>
                    <div className="navigate-link">
                        <p>Already have an Account?</p>
                        <span style={{ color: "#fe715d", cursor: "pointer", marginLeft: "5px" }} onClick={() => { navigate("/login") }}>Login</span>
                    </div>
                    <form className="user-login">
                        <div>
                            <input required="true" onChange={(e) => { setName(e.target.value) }} className="user-input" type="text" placeholder="Name" />
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setId(e.target.value) }} className="user-input" type="number" placeholder="ID-Member" />
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setEmail(e.target.value) }} className="user-input" type="email" placeholder="User Email" />
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setPassword(e.target.value) }} className="user-input" type="password" placeholder="Password"></input>
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setVerifyPassword(e.target.value) }} className="user-input" type="password" placeholder="Retype Your Password"></input>
                        </div>
                        <div className="submit-button">
                            <button onClick={(e) => { handleSubmit(e, name, id, email, password, verifyPassword) }} className="submit-button">Register</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register;