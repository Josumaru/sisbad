import Progress from "../Progress/Progress";
import "./DashboardAdmin.css";
import TambahBuku from "../TambahBuku/TambahBuku"
import { MdDashboard, MdLogout, MdBook } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import DashboardBook from "../DashboardBook/DashboardBook";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Bukupage from "../BukuPage/Bukupage";

const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const borrowRef = useRef();
    const [allBook, setAllBook] = useState([]);

    useEffect(() => {
        let url = "http://localhost:3001/showbook"
        fetch(url).then((response => response.json())).then(data => {
            console.log(data)
            setAllBook(data)
        })
        
    },[])

    const handleLogout = () => {
        axios.get("http://localhost:3001/logout")
            .then((res) => {
                console.log(res.data.message)
                if (res.data.message === "success") {
                    window.location.reload()
                }
            })
    }
    return (
        <div className="dashboard">
            <div className="dashboard-left-section">
                <div>
                    <div className="dashboard-logo">
                        <MdBook />
                    </div>
                    <MdDashboard style={{ fontSize: "35px", cursor: "pointer" }} />
                </div>
                <div>
                    <MdLogout onClick={handleLogout} style={{ fontSize: "35px", cursor: "pointer" }} />
                </div>
            </div>
            <div className="dashboard-mid-section">
                <div className="dashboard-mid-section-top">
                    <h3>Dashboard</h3>
                    <div className="search-bar">
                        <button className="search-button"><FiSearch style={{ fontSize: "25px" }} /></button>
                        <input type="search" placeholder="Looking for Book ?" className="search"></input>
                    </div>
                </div>
                <div className="dashboard-mid-section-bottom">
                    <div ref={borrowRef} className="book-borrowed">
                    {allBook.map((book) => {
                    return (
                        <Bukupage judul={book.judul} penulis = {book.penulis} />
                    )
                })}
                    </div>
                </div>
            </div>
            <div className="dashboard-right-section">
                <TambahBuku />
            </div>
        </div>
    )
}
export default Dashboard;