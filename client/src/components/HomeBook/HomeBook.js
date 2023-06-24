import axios from "axios";
import "./HomeBook.css"
import { useEffect, useRef, useState } from "react"
const Bukupage = (props) => {
    axios.defaults.withCredentials = true;
    const optionRef = useRef()
    const limitRef = useRef()
    const borowRef = useRef()
    const notAvalaible = useRef()
    const [isOption, setIsOption] = useState(false);
    const [idMember, setIdMember] = useState()

    const handleOption = () => {
        setIsOption(!isOption)
    }
    useEffect(() => {
        if (!isOption) {
            optionRef.current.classList.add("hide")
        } else {
            optionRef.current.classList.remove("hide")
        }

    }, [isOption])
    const date = new Date()
    date.setDate(date.getDate() + 3)
    const timeStamp = `${date.getFullYear()}-${date.getUTCMonth()}-${date.getDay()}`
    const handleChoose = () => {
        const userAuth = async () => {
            const res = await axios.post("http://localhost:3001/auth")
            const resp = await axios.post(`http://localhost:3001/peminjaman?id_buku=${props.id_buku}&tanggal_pengembalian=${timeStamp}&id_member=${res.data.id_account}`)
            console.log(resp.data)
            if (resp.data.message == "limit") {
                limitRef.current.style.display = "flex"
            } else if (resp.data.message == "borrowed") {
                notAvalaible.current.style.display = "flex";
            } else {
                borowRef.current.style.display = "flex"
            }
        }
        userAuth()
    }
    return (
        <div className="buku" onClick={handleOption}>
            <div ref={limitRef} className="limiter">
                <p>
                    Limit
                </p>
            </div>
            <div ref={notAvalaible} className="edisi-males">
                <p>
                    Not Available
                </p>
            </div>
            <div ref={borowRef} className="borrowed">
                <p>
                    Borrowed
                </p>
            </div>
            <div ref={optionRef} onClick={handleChoose} className="option">
                <p>Pinjam</p>
            </div>
            <div className="cover-book-home">
                <img className="cover-image" src={props.url}></img>
            </div>
            <h6 style={{ textIndent: props.indent }}>{props.judul}</h6>
            <p style={{ textIndent: props.indent }}>{props.penulis}</p>
        </div>
    )
}
export default Bukupage;