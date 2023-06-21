import "./Home.css"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/2.jpg"
import { FiSearch } from "react-icons/fi"
import { CgMenuGridR } from "react-icons/cg"
import { AiOutlineUserAdd } from "react-icons/ai"
import Category from "../Category/Category"
import BukuPage from "../BukuPage/Bukupage"
import HomeBook from "../HomeBook/HomeBook"
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
        <div className="Hopa">
            <div>
                <img className="background-page" style={{width:"100%",height:"70vh", overflow:"hidden"}} src={logo}></img>
                <div className="Atas">
                    <div className="ib">
                        <h1 style={{margin: "0"}}>LIBRARY SEARCH</h1>
                        <p style={{ marginTop: "0", marginBottom: "70px" }} >Buku adalah jendela dunia</p>
                    </div>
                    <div className="Search" >
                        <div className="search-bar-home">
                            <div className="search-bar-home-page">
                                <input type="search-home" placeholder="Search book,Stories,Article,and more" className="search"></input>
                            </div>
                            <div className="button-div">
                                <button className="search-button-home" ><FiSearch style={{ fontSize: "25px" }} /></button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="background-page-div">
                    <div className="menu-grid">
                        <CgMenuGridR onClick={() => { navigate("/dashboard") } } style={{ fontSize: "34px" }} />
                    </div>
                    <h6 style={{marginLeft:"110px"}}>
                        <div className="rt">
                            <div className="Reading">READING'S</div>
                            <div className="Time">TIME</div>
                        </div>
                    </h6>
                    <div className="SignIn">
                        <AiOutlineUserAdd className="SignInAi" />
                        <button className="SignInButton" onClick={() => { navigate("/login") }}>Sign In</button>
                    </div>
                </div>
            </div>
                <div className="Buku">
                    <div className="Buku-home">
                        <HomeBook Penulis={"Pak Husni"} judul={"Python 3"} url={ "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1249749162i/6688121.jpg" } />
                        <HomeBook Penulis={"Pak Husni"} judul={"Python 3"} url={ "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1249749162i/6688121.jpg" } />
                        <HomeBook Penulis={"Pak Husni"} judul={"Python 3"} url={ "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1249749162i/6688121.jpg" } />
                    </div>
                </div>
                <div className="kotak-kosong"></div>
                <div className="category">
                    <h3>Find More Category</h3>
                    <div className="category-book">
                        <Category category={"🔖 See All"} color={"linear-gradient(43deg, #8895e3 0%, #6cc0f7 100%"} />
                        <Category category={"💌 Romance"} color={"linear-gradient(43deg, #fabced 0%, #adc8ff 100%"} />
                        <Category category={"📖 Comic"} color={"linear-gradient(43deg, #fd5ecb 0%, #fd83a2 100%"} />
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
