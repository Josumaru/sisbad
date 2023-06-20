import Progress from "../Progress/Progress";
import "./Dashboard.css";
import { MdDashboard, MdLogout, MdBook } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import DashboardBook from "../DashboardBook/DashboardBook";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [showReturn, setShowReturn] = useState(true);
    const [showBorrow, setShowBorrow] = useState(true);
    const borrowRef = useRef();
    const returnRef = useRef();
    const returnButton = useRef();
    const borrowButton = useRef();
    useEffect(() => {
        if (showBorrow) {
            returnRef.current.classList.add("display-none");
            borrowRef.current.classList.remove("display-none");
            borrowButton.current.classList.replace("book-navigation-span", "span-clicked");
            returnButton.current.classList.replace("span-clicked", "book-navigation-span");
        } else if (showReturn) {
            borrowRef.current.classList.add("display-none");
            returnRef.current.classList.remove("display-none");
            borrowButton.current.classList.replace("span-clicked", "book-navigation-span");
            returnButton.current.classList.replace("book-navigation-span", "span-clicked");

        }
    }, [showBorrow])

    const handleShowReturn = () => {
        setShowReturn(true);
        setShowBorrow(false);

    }
    const handleShowBorrow = () => {
        setShowBorrow(true);
        setShowReturn(false);
    }
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
                <div className="dashboard-mid-section-mid">
                    <div className="book-progress">
                        <Progress calc={"1/5"} status={"calc(1/5 * 100%)"} context={"Buku Dikembalikan"} color={"red"} rotate={"90deg"} />
                        <Progress calc={"2/5"} status={"calc(2/5 * 100%)"} context={"Buku Dipinjam"} color={"green"} rotate={"-90deg"} />

                    </div>
                    <div className="book-navigation">
                        <span className="book-navigation-span" ref={borrowButton} onClick={handleShowBorrow}>Dipinjam</span>
                        <span className="book-navigation-span" ref={returnButton} onClick={handleShowReturn}>Dikembalikan</span>
                    </div>
                </div>
                <div className="dashboard-mid-section-bottom">
                    <div ref={borrowRef} className="book-borrowed">
                        <DashboardBook title="Sebelah Utara Masjid" author="Sasuke" />
                        <DashboardBook title="Sebelah Utara Masjid" author="Sasuke" />
                        <DashboardBook title="Sebelah Utara Masjid" author="Sasuke" />
                        <DashboardBook title="Sebelah Utara Masjid" author="Sasuke" />
                        <DashboardBook title="Sebelah Utara Masjid" author="Sasuke" />
                    </div>
                    <div ref={returnRef} className="book-history">
                        <DashboardBook title="Ini Buku yang dipinjam" author="Soeharto Kumamura" />
                        <DashboardBook title="Ini Buku yang dipinjam" author="Soeharto Kumamura" />
                        <DashboardBook title="Ini Buku yang dipinjam" author="Soeharto Kumamura" />
                        <DashboardBook title="Ini Buku yang dipinjam" author="Soeharto Kumamura" />

                    </div>
                </div>
            </div>
            <div className="dashboard-right-section">
                <p>Hello, World!</p>
            </div>
        </div>
    )
}
export default Dashboard;