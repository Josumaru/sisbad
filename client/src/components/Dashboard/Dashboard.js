import "./Dashboard.css";
import DashboardBook from "../DashboardBook/DashboardBook";
import Progress from "../Progress/Progress";
import axios from "axios";
import { MdDashboard, MdLogout } from "react-icons/md"
import { FiSearch } from "react-icons/fi"
import { AiFillHome } from "react-icons/ai"
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import card from "../../asset/kartu.png"

const Dashboard = () => {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [showReturn, setShowReturn] = useState(true);
    const [showBorrow, setShowBorrow] = useState(true);
    const borrowRef = useRef();
    const returnRef = useRef();
    const returnButton = useRef();
    const borrowButton = useRef();
    const [borowBook, setBorrowBook] = useState([]);
    const [returnBook, setReturnBook] = useState([]);
    const [find, setFind] = useState('');
    const [jumlahPinjam, setJumlahPinjam] = useState();
    const [jumlahKembali, setJumlahKembali] = useState();
    const [id, setId] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState()


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
    useEffect(() => {
        findBook();
    }, [find])
    const findBook = async () => {
        const res = await axios.get(`http://localhost:3001/query?find=${find}`)
        setBorrowBook(res.data);
        setReturnBook(res.data);
    }

    useEffect(() => {
        async function fetchData() {
            const resp = await axios.post("http://localhost:3001/auth")
            const res = await axios.get(`http://localhost:3001/return?table=peminjaman&target=${resp.data.id_account}`);
            const respo = await axios.get(`http://localhost:3001/return?table=pengembalian&target=${resp.data.id_account}`);
            const counter = await axios.get(`http://localhost:3001/counter?table=peminjaman&id_member=${resp.data.id_account}`)
            const returnedBook = await axios.get(`http://localhost:3001/counter?table=pengembalian&id_member=${resp.data.id_account}`)
            console.log(counter)
            setJumlahPinjam(counter.data.count)
            setJumlahKembali(returnedBook.data.count)
            console.log(returnBook)
            setBorrowBook(res.data)
            setReturnBook(respo.data)
            setName(resp.data.nama)
            setId(resp.data.id_account)
       
        }
        fetchData()

    }, [])
    return (
        <div className="dashboard">
            <div className="dashboard-left-section">
                <div>
                    <AiFillHome onClick={() => { navigate("/") }} className="dashboard-button" />
                    <MdDashboard className="dashboard-button" />
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
                        <input onChange={(e) => { setFind(e.target.value) }} type="search" placeholder="Looking for Book ?" className="search"></input>
                    </div>
                </div>
                <div className="dashboard-mid-section-mid">
                    <div className="book-progress">
                        <Progress calc={`${jumlahPinjam}/5`} status={`calc(${jumlahPinjam}/5 * 100%)`} context={"Buku Dipinjam"} color={"green"} rotate={"-90deg"} />
                        <Progress calc={`${jumlahKembali}`} status={`100%`} context={"Buku Dikembalikan"} color={"red"} rotate={"90deg"} />

                    </div>
                    <div className="book-navigation">
                        <span className="book-navigation-span" ref={borrowButton} onClick={handleShowBorrow}>Dipinjam</span>
                        <span className="book-navigation-span" ref={returnButton} onClick={handleShowReturn}>Dikembalikan</span>
                    </div>
                </div>
                <div className="dashboard-mid-section-bottom">
                    <div ref={borrowRef} className="book-history">
                        {
                            borowBook.map((book, index) => {
                                console.log(book)
                                return (
                                    <DashboardBook key={index} date={ date } id_buku={ book.id_buku} title={book.judul} author={book.penulis} cover={book.cover} sinopsis={ book.sinopsis} />
                                    )
                                })}
                    </div>
                    <div ref={returnRef} className="book-history">
                        {
                            returnBook.map((book, index) => {
                                return (
                                    <DashboardBook display={ "none" } key={index} title={book.judul} author={book.penulis} cover={book.cover} sinopsis={ book.sinopsis} />
                                )
                            })}
                    </div>
                </div>
            </div>
            <div className="dashboard-right-section">
                <div className="card">
                    <p className="id-account">{id}</p>
                    <p className="name-account">{ name}</p>
                    <img src={ card }></img>
                </div>
            </div>
        </div>
    )
}
export default Dashboard;