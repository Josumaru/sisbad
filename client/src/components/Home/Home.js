import "./Home.css"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/login-image.svg"

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <body style={{ backgroundImage: "client/src/asset/2.jpg" }}>
                <center style={{ backgroundImage: { logo } }}>
                    <h6>READING'STIME</h6>
                    <button onClick={() => { navigate("/login") }}>Sign In</button>
                    <h1>LIBRARY SEARCH</h1>
                    <p>Buku adalah jendela dunia</p>
                    <form>
                        <input></input>
                    </form>
                </center>
            </body>
        </>
    )
}

export default Home;
