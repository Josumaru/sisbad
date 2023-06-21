import HomeBook from "../components/HomeBook/HomeBook"
import "./PageView.css"
import { useEffect, useState } from "react"
import axios from "axios"

const PageView = () => {
    const [book, setBook] = useState([])
    const SeeAllBook = async () => {
        const res = await axios.get("http://localhost:3001/showbook");
        setBook(res.data)
    }
    useEffect(() => {
        SeeAllBook()
    },[])

    return (
        <div className="page-view">
            <div className="view-atas">
                <p>All Book</p>
            </div>
            <div className="view-bawah">
                {book.map((book) => {
                    return (
                        // console.log(book)
                        <HomeBook url={book.cover} judul={book.judul} penulis={book.penulis} sinopsis={book.sinopsis } />
                    )
                })}
                
            </div>
        </div>
    )
}

export default PageView;