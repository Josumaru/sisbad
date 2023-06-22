import HomeBook from "../HomeBook/HomeBook"
import "./PageView.css"
import { useEffect, useState } from "react"
import axios from "axios"
import Category from "../Category/Category"

const PageView = (props) => {
    const [book, setBook] = useState([])
    const SeeAllBook = async () => {
        console.log(props)
        const res = await axios.get(`http://localhost:3001/showbook`);
        setBook(res.data)
    }
    useEffect(() => {
        SeeAllBook()
        console.log(props)
    }, []);
    // <Category query={ props.type } />
    return (
        <div className="page-view">
            <div className="view-atas">
                <p>All Book</p>
            </div>
            <div className="view-bawah">
                {book.map((book) => {
                    return (
                        <HomeBook url={book.cover} judul={book.judul} penulis={book.penulis} sinopsis={book.sinopsis} />
                    )
                })}
            </div>
        </div>
    )
}

export default PageView;