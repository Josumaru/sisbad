import "./Bukupage.css"
import axios from "axios"
import { MdDeleteSweep } from "react-icons/md"
import { FiEdit } from "react-icons/fi"

const Bukupage = (props) => {
    const handleUpdate = () => {
        props.transfer(props)
    }
    const handleDelete = async () => {
        const res = await axios.post(`http://localhost:3001/deletebook?id_buku=${props.id_buku}`)
        console.log(res)
        if (res.data.message === "success") {
            alert("Book Successfully Deleted")
            window.location.reload()
        }
    }
    return (
        <div className="book-div" >
            <div className="buku-page">
                <div className="cover-book-home-page">
                    <img alt="Book" className="cover-image-page" src={props.cover}></img>
                </div>
            </div>
            <div className="desc">
                <p>{props.judul}</p>
                <p>{props.penulis}</p>
                <p>{props.penerbit}</p>
            </div>
            <div className="button-edit-div">
                <div className="button-edit">
                    <button className="button-sama" onClick={handleUpdate}><FiEdit/></button>
                </div>
                <div className="button-edit">
                    <button className="button-sama" onClick={handleDelete}><MdDeleteSweep /></button>
                </div>
            </div>
        </div>
    )
}
export default Bukupage;