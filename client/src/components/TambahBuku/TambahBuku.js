import "./TambahBuku.css"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import logo from "../../asset/login-image.svg"
import axios from "axios"

const TambahBuku = () => {
    const navigate = useNavigate();
    const [id_buku, setIdBuku] = useState("")
    const [judul, setJudul] = useState("")
    const [penulis, setPenulis] = useState("")
    const [penerbit, setPenerbit] = useState("")
    const [tahun_terbit, setTahun] = useState("")
    const [sinopsis, setSinopsis] = useState("")
    const [cover, setCover] = useState("")

    axios.defaults.withCredentials = true;
    const handleSubmit = async (e, id_buku, judul, penulis, penerbit, tahun_terbit, sinopsis, cover) => {
        e.preventDefault();
        const res = await axios.post(`http://localhost:3001/addbook?id_buku=${id_buku}&judul=${judul}&penulis=${penulis}&penerbit=${penerbit}&tahun_terbit=${tahun_terbit}&sinopsis=${sinopsis}&cover=${cover}`)
        // console.log(res.data)
        if (res.data.message === "success") {
            console.log(res.data)
            // navigate("/");
        }
    }

    return (
        <div className="tambah-page">
            <div className="tambah-login-section">
                <div className="tambah-login-section-left">
                    <div className="admin-text">
                        <h1>Admin</h1>
                    </div>
                    <form className="tambah-user-login">
                        <div>
                            <input required="true" onChange={(e) => { setIdBuku(e.target.value) }} className="user-input" type="number" placeholder="ID-Buku" />
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setJudul(e.target.value) }} className="user-input" type="text" placeholder="Judul Buku" />
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setPenulis(e.target.value) }} className="user-input" type="text" placeholder="Penulis" />
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setPenerbit(e.target.value) }} className="user-input" type="text" placeholder="Penerbit"></input>
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setTahun(e.target.value) }} className="user-input" type="number" placeholder="Tahun Terbit"></input>
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setSinopsis(e.target.value) }} className="user-input" type="text" placeholder="Sinopsis"></input>
                        </div>
                        <div>
                            <input required="true" onChange={(e) => { setCover(e.target.value) }} className="user-input" type="text" placeholder="Cover"></input>
                        </div>
                        <div className="submit-button">
                            <button onClick={(e) => { handleSubmit(e,id_buku, judul, penulis, penerbit, tahun_terbit, sinopsis, cover) }} className="submit-button">Add Book</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TambahBuku;

