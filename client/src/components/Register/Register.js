import "./Register.css"
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate();
    return (
        <>
            Register
            <button onClick={() => { navigate("/login") }}>Login?</button>
        </>
    )
}

export default Register;