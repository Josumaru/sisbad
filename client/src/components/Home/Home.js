import "./Home.css"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/login-image.svg"
import { FiSearch } from "react-icons/fi"

const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div ClassName="Body">
                <bg-image>
                <div className="Atas">
                    <h6>READING'STIME</h6>
                    <div className="SignIn">
                        <button onClick={() => { navigate("/login") }}>Sign In</button>
                    </div>
                    <h1>LIBRARY SEARCH</h1>
                    <p>Buku adalah jendela dunia</p>
                </div>
                <div className="Search" > 
                        <div className="search-bar" >
                        <button className="search-button" ><FiSearch style={{ fontSize: "25px" }} /></button>
                        <input type="search" placeholder="Search book,Stories,Article,and more" className="search"></input>
                    </div>
                </div>
                </bg-image>
                <div className="Buku">
                    <div>
                        <div className="cover">
                            <img src="https://marketplace.canva.com/EAFYHx4rn2w/1/0/1131w/canva-coklat-krem-kreatif-modern-cover-buku-agenda-dokumen-a4-0zKNiSfvTXM.jpg"></img>
                        </div>
                        <p>Judul</p>
                        <p>Penulis</p>
                    </div>
                    <div>
                        <div className="cover">
                            <img src="https://marketplace.canva.com/EAFYHx4rn2w/1/0/1131w/canva-coklat-krem-kreatif-modern-cover-buku-agenda-dokumen-a4-0zKNiSfvTXM.jpg"></img>
                        </div>
                        <p>Judul</p>
                        <p>Penulis</p>
                    </div>
                    <div>
                        <div className="cover">
                            <img src="https://marketplace.canva.com/EAFYHx4rn2w/1/0/1131w/canva-coklat-krem-kreatif-modern-cover-buku-agenda-dokumen-a4-0zKNiSfvTXM.jpg"></img>
                        </div>
                        <p>Judul</p>
                        <p>Penulis</p>
                    </div>
                </div>
            </div>     
        </>
    )
}

export default Home;
