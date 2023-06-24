import HomeBook from "../HomeBook/HomeBook"
import "./PageView.css"
import {  useState } from "react"
import axios from "axios"

const PageView = (props) => {
    const [book, setBook] = useState([])

    const SeeAllBook = async () => {
        const res = await axios.get(`http://localhost:3001/category?query=${props.id_buku}`);
        setBook(res.data)
    }
    SeeAllBook()
    // useEffect(() => {
    // }, []);
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