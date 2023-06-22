import "./DashboardAdmin.css";
import TambahBuku from "../TambahBuku/TambahBuku"
import { MdDashboard, MdLogout, MdBook } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { AiFillHome } from "react-icons/ai"
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Bukupage from "../BukuPage/Bukupage";

const Dashboard = () => {
    axios.defaults.withCredentials = true;
    const navigate = useNavigate()
    const borrowRef = useRef();
    const [allBook, setAllBook] = useState([]);
    const [updateBook, setUpdateBook] = useState("")
    const [button, setButton] = useState("Add Book")
    const [search, setSearch] =useState()

    const handleClick = (data) => {
        setUpdateBook(data)
        setButton("Update Book")
    }

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`http://localhost:3001/query?find=${search}`)
            setAllBook(res.data)
        }
        fetchData();
    }, [search])
    
    useEffect(() => {
        axios.get("http://localhost:3001/showbook")
            .then((res) => {
                setAllBook(res.data)
            })
    }, [])

    const handleLogout = () => {
        axios.get("http://localhost:3001/logout")
            .then((res) => {
                if (res.data.message === "success") {
                    window.location.reload()
                }
            })
    }
    return (
        <div className="dashboard">
            <div className="dashboard-left-section">
                <div>
                    <AiFillHome onClick={() => {navigate("/") }} className="dashboard-button"/>
                    <MdDashboard className="dashboard-button"/>
                </div>
                <div>
                    <MdLogout className="dashboard-button" onClick={handleLogout} style={{ fontSize: "35px", cursor: "pointer" }} />
                </div>
            </div>
            <div className="dashboard-mid-section">
                <div className="dashboard-mid-section-top">
                    <h3>Dashboard</h3>
                    <div className="search-bar">
                        <button className="search-button"><FiSearch style={{ fontSize: "25px" }} /></button>
                        <input onChange={(e) =>{setSearch(e.target.value)}} type="search" placeholder="Looking for Book ?" className="search"></input>
                    </div>
                </div>
                <div className="dashboard-mid-section-bottom">
                    <div ref={borrowRef} className="book-borrowed">
                        {allBook.map((book) => {
                            return (
                                <Bukupage transfer={handleClick} id_buku={book.id_buku} tahun_terbit={book.tahun_terbit} judul={book.judul} penulis={book.penulis} cover={book.cover} penerbit={book.penerbit} sinopsis={book.sinopsis} />
                            )
                        })}
                    </div>
                </div>
            </div>
            <div className="dashboard-right-section">
                <TambahBuku
                    id_buku={updateBook.id_buku}
                    judul={updateBook.judul}
                    cover={updateBook.cover}
                    penerbit={updateBook.penerbit}
                    penulis={updateBook.penulis}
                    sinopsis={updateBook.sinopsis}
                    tahun_terbit={updateBook.tahun_terbit}
                    button={button}
                />
            </div>
        </div>
    )
}
export default Dashboard;