import HomeBook from "../HomeBook/HomeBook"
import "./PageView.css"
import { useEffect, useRef, useState } from "react"
import axios from "axios"

const PageView = (props) => {
    const [book, setBook] = useState([])

    const SeeAllBook = async () => {
        console.log(props)
        const res = await axios.get(`http://localhost:3001/category?query=${props.id_buku}`);
        setBook(res.data)
    }
    useEffect(() => {
        SeeAllBook()
    }, []);
    return (
        <div className="page-view" >
            <div className="view-atas">
                <p>{ props.category}</p>
            </div>
            <div className="view-bawah">
                {book.map((book) => {
                    return (
                        <HomeBook id_buku={ book.id_buku} url={book.cover} judul={book.judul} penulis={book.penulis} sinopsis={book.sinopsis} />
                    )
                })}
            </div>
        </div>
    )
}

export default PageView;