import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            Home Page
            <button onClick={() => { navigate("/dashboard")}}>Navigate</button>
        </>
    )
}

export default Home;