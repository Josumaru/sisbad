import "./Home.css"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/2.jpg"
import { FiSearch } from "react-icons/fi"
import { CgMenuGridR } from "react-icons/cg"
import { AiOutlineUserAdd } from "react-icons/ai"
import Category from "../Category/Category"
import HomeBook from "../HomeBook/HomeBook"
import { useEffect, useState, useRef } from "react"
import axios from "axios"
import SearchResult from "../SearchResult/SearchResult"

const Home = (props) => {
    const navigate = useNavigate();
    const [book, setBook] = useState([])
    const [isBook, setIsBook] = useState([])
    const [allBook, setAllBook] = useState([])
    const [isSearch, setIsSearch] = useState(true)
    const [users, setUsers] = useState("Sign In")
    const searchReff = useRef();

    useEffect(() => {
        if (isSearch) {
            searchReff.current.classList.add("search-result-down")
        } else {
            searchReff.current.classList.remove("search-result-down")
        }
    }, [isSearch])
    
    useEffect(() => {
        findBook();
    }, [book])
    const findBook = async () => {
        const res = await axios.get(`http://localhost:3001/query?find=${book}`)
        setIsBook(res.data)
    }

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.get(`http://localhost:3001/showbook?sql=`)
            const randomBook = shuffleBook(resp.data)
            setAllBook(randomBook)
        }
        fetchData()

    }, [])

    const shuffleBook = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.slice(0,4);
    }

    return (
        <>
            <div className="Hopa">
                <div>
                    <img className="background-page" style={{ width: "100%", height: "70vh", overflow: "hidden" }} src={logo}></img>
                    <div className="Atas">
                        <div className="ib">
                            <h1 style={{ margin: "0" }}>LIBRARY SEARCH</h1>
                            <p style={{ marginTop: "0", marginBottom: "70px" }} >Buku adalah jendela dunia</p>
                        </div>
                        <div className="Search" >
                            <div onClick={() => {setIsSearch(!isSearch); }} className="search-bar-home">
                                <div className="search-bar-home-page">
                                    <input onChange={(e) => { setBook(e.target.value) }} type="search-home" placeholder="Search book,Stories,Article,and more" className="search"></input>
                                </div>
                                <div className="button-div">
                                    <button className="search-button-home" ><FiSearch style={{ fontSize: "25px" }} /></button>
                                </div>
                            </div>
                            <div ref={searchReff} className="search-result">
                                {
                                    isBook.map((buku, index) => {
                                        return (
                                            <SearchResult key={ index} cover={buku.cover} judul={buku.judul } />
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                    <div className="background-page-div">
                        <div className="menu-grid">
                            <CgMenuGridR onClick={() => { navigate("/dashboard") }} style={{ fontSize: "34px" }} />
                        </div>
                        <h6 style={{ marginLeft: "175px" }}>
                            <div className="rt">
                                <div className="Reading">READING'S</div>
                                <div className="Time">TIME</div>
                            </div>
                        </h6>
                        <div className="SignIn">
                            <AiOutlineUserAdd className="SignInAi" />
                            <button className="SignInButton" onClick={() => { navigate("/login") }}>{ props.user }</button>
                        </div>
                    </div>
                </div>
                <div className="Buku">
                    <div className="Buku-home">
                        {
                            allBook.map((buku, index) => {

                                return (
                                    <HomeBook key={index} id_buku={ buku.id_buku} penulis={buku.penulis} judul={buku.judul} url={buku.cover} />
                                )
                            })
                        }
                    </div>
                </div>
                <div className="kotak-kosong"></div>
                <div className="category">
                    <h3>Find More Category</h3>
                    <div className="category-book">
                        <Category key={1 } id_buku={ "%" } category={"🔖 See All"} color={"linear-gradient(43deg, #8895e3 0%, #6cc0f7 100%"} />
                        <Category key={2 } id_buku={ 1 } category={"📔 Novel"} color={"linear-gradient(43deg, rgba(251,173,126,1) 0%, rgba(249,203,105,1) 100%)"} />
                        <Category key={3 } id_buku={ 2 } category={"📖 Comic"} color={"linear-gradient(43deg, #fd5ecb 0%, #fd83a2 100%"} />
                        <Category key={4 } id_buku={ 3 } category={"💌 Leadership"} color={"linear-gradient(43deg, #fabced 0%, #adc8ff 100%"} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;
