import "./Home.css"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <body style={{backgroundImage:"client/src/asset/2.jpg"}}>
            <center style={{backgroundImage:"test.jpg"}}>
                <h6>READING'STIME</h6> <button>Sign In</button>
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
