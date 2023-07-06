import "./TambahBuku.css"
import { useEffect, useState } from "react"
import axios from "axios"

const TambahBuku = (props) => {

    axios.defaults.withCredentials = true;
    const [id_buku, setIdBuku] = useState("")
    const [judul, setJudul] = useState("")
    const [penulis, setPenulis] = useState("")
    const [penerbit, setPenerbit] = useState("")
    const [tahun_terbit, setTahun] = useState("")
    const [sinopsis, setSinopsis] = useState("")
    const [cover, setCover] = useState("")
    const [button, setButton] = useState("Add Book")
    const handleSubmit = async (e, id_buku, judul, penulis, penerbit, tahun_terbit, sinopsis, cover) => {
        e.preventDefault();
        if (button === "Add Book") {
            const res = await axios.post(`http://localhost:3001/addbook?id_buku=${id_buku}&judul=${judul}&penulis=${penulis}&penerbit=${penerbit}&tahun_terbit=${tahun_terbit}&sinopsis=${sinopsis}&cover=${cover}`)
            if (res.data.message === "success") {
                alert("Successfully Added")
                window.location.reload()
            }
        } else {
            const res = await axios.post(`http://localhost:3001/updatebook?id_buku=${id_buku}&judul=${judul}&penulis=${penulis}&penerbit=${penerbit}&tahun_terbit=${tahun_terbit}&sinopsis=${sinopsis}&cover=${cover}`)
            if (res.data.message === "success") {
                alert("Successfully Updated")
                window.location.reload()
            }
        }
    }

    useEffect(() => {
        setButton(props.button)
        setJudul(props.judul)
        setPenerbit(props.penerbit)
        setCover(props.cover)
        setIdBuku(props.id_buku)
        setTahun(props.tahun_terbit)
        setSinopsis(props.sinopsis)
        setPenulis(props.penulis)
        setButton(props.button)
    }, [props])

    return (
        <div className="tambah-page">
            <div className="tambah-login-section">
                <div className="tambah-login-section-left">
                    <div className="admin-text">
                        <h1>Admin</h1>
                    </div>
                    <form className="tambah-user-login">
                        <div>
                            <input required={true} value={id_buku} onChange={(e) => { setIdBuku(e.target.value) }} className="user-input" type="number" placeholder="ID-Buku" />
                        </div>
                        <div>
                            <input required={true} value={judul} onChange={(e) => { setJudul(e.target.value) }} className="user-input" type="text" placeholder="Judul Buku" />
                        </div>
                        <div>
                            <input required={true} value={penulis} onChange={(e) => { setPenulis(e.target.value) }} className="user-input" type="text" placeholder="Penulis" />
                        </div>
                        <div>
                            <input required={true} value={penerbit} onChange={(e) => { setPenerbit(e.target.value) }} className="user-input" type="text" placeholder="Penerbit"></input>
                        </div>
                        <div>
                            <input required={true} value={tahun_terbit} onChange={(e) => { setTahun(e.target.value) }} className="user-input" type="number" placeholder="Tahun Terbit"></input>
                        </div>
                        <div>
                            <input required={true} value={sinopsis} onChange={(e) => { setSinopsis(e.target.value) }} className="user-input" type="text" placeholder="Sinopsis"></input>
                        </div>
                        <div>
                            <input required={true} value={cover} onChange={(e) => { setCover(e.target.value) }} className="user-input" type="text" placeholder="Cover"></input>
                        </div>
                        <div className="submit-button">
                            <button onClick={(e) => { handleSubmit(e, id_buku, judul, penulis, penerbit, tahun_terbit, sinopsis, cover) }} className="submit-button">{button}</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default TambahBuku;

