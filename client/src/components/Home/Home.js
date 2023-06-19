import "./Home.css"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/2.jpg"
import { FiSearch } from "react-icons/fi"
import { CgMenuGridR } from "react-icons/cg"
import { AiOutlineUserAdd } from "react-icons/ai"
import Category from "../Category/Category"
import BukuPage from "../BukuPage/Bukupage"
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <div>
                <img className="background-page" src={logo}></img>

                <div className="Atas">
                    <h1>LIBRARY SEARCH</h1>
                    <p>Buku adalah jendela dunia</p>
                    <div className="Search" >
                        <div className="search-bar-home" >
                            <input type="search-home" placeholder="Search book,Stories,Article,and more" className="search"></input>
                            <button className="search-button-home" ><FiSearch style={{ fontSize: "25px" }} /></button>
                        </div>
                    </div>
                </div>
                <div className="background-page-div">
                    <div style={{ width: "90px"}}>
                        <CgMenuGridR style={{ fontSize: "40px" }} />
                    </div>
                    <h6>READING'STIME</h6>
                    <div className="SignIn">
                        <AiOutlineUserAdd className="SignInAi"/>
                        <button className="SignInButton" onClick={() => { navigate("/login") }}>Sign In</button>
                    </div>
                </div>
            </div>
            <div ClassName="Body">
                <div className="Buku">
                    <div className="Buku-home">
                        <Category BukuPage={"Judul, Penulis"} color={"linear-gradient(43deg, #8895e3 0%, #6cc0f7 100%"}/>
                        <Category BukuPage={"Judul, Penulis"} color={"linear-gradient(43deg, #8895e3 0%, #6cc0f7 100%"}/>
                        <Category BukuPage={"Judul, Penulis"} color={"linear-gradient(43deg, #8895e3 0%, #6cc0f7 100%"}/>
                    </div>
                </div>
                <div className="category">
                    <h3>Find More Category</h3>
                    <div className="category-book">
                        <Category category={"📖 Comic"} color={"linear-gradient(43deg, #8895e3 0%, #6cc0f7 100%"} />
                        <Category category={"💌 Romance"} color={"linear-gradient(43deg, #fabced 0%, #adc8ff 100%"} />
                        <Category category={"💻 Informatics"} color={"linear-gradient(43deg, #fd5ecb 0%, #fd83a2 100%"} />
                        <Category category={"📔 Novel"} color={"linear-gradient(43deg, rgba(251,173,126,1) 0%, rgba(249,203,105,1) 100%)"} />
                    </div>
                </div>
                <div className="category">
                    <h3>Find More Category</h3>
                    <div className="category-book">
                        <Category category={"📖 Comic"} color={"linear-gradient(43deg, #8895e3 0%, #6cc0f7 100%"} />
                        <Category category={"💌 Romance"} color={"linear-gradient(43deg, #fabced 0%, #adc8ff 100%"} />
                        <Category category={"💻 Informatics"} color={"linear-gradient(43deg, #fd5ecb 0%, #fd83a2 100%"} />
                        <Category category={"📔 Novel"} color={"linear-gradient(43deg, rgba(251,173,126,1) 0%, rgba(249,203,105,1) 100%)"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
