import "./Login.css"
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <p>LoginPage</p>
            <button onClick={() => { navigate("/register") }}>Register ?</button>
        </>   
    )
}

export default Login;

