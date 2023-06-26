import HomeBook from "../HomeBook/HomeBook"
import "./PageView.css"
import {  useEffect, useState } from "react"
import axios from "axios"

const PageView = (props) => {
    const [book, setBook] = useState([])

    useEffect(() => {
        const SeeAllBook = async () => {
            const res = await axios.get(`http://localhost:3001/category?query=${props.id_buku}`);
            console.log("Hello")
            setBook(res.data)
        }
        SeeAllBook()
    },[])

    return (
        <div className="page-view" >
            <div className="view-atas">
                <p>{ props.category}</p>
            </div>
            <div className="view-bawah">
                {book.map((book, index) => {
                    return (
                        <HomeBook key={ index} id_buku={ book.id_buku} url={book.cover} judul={book.judul} penulis={book.penulis} sinopsis={book.sinopsis} />
                    )
                })}
            </div>
        </div>
    )
}

export default PageView;