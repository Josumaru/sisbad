import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <>
            Home Page
            <button onClick={() => { navigate("/dashboard")}}>Dashboard</button>
        </>
    )
}

export default HomePage;