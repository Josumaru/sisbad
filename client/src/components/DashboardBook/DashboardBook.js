import axios from "axios"
import "./DashboardBook.css"

const DashboardBook = (props) => {
    const handleReturn = () => {
        const fetchData = async () => {
            const resp = await axios.post("http://localhost:3001/auth")
            const id = resp.data.id_account
            console.log(id)
            axios.post(`http://localhost:3001/history?id_buku=${props.id_buku}&id_member=${id}`)
            const res = await axios.post(`http://localhost:3001/borrow?id_buku=${props.id_buku}`)
            console.log(res)
            if (res.data.message === "success") {
                window.location.reload();
            }
        }
        fetchData()
    }
    return (
        <div className="dashboard-book">
            <div className="dashboard-book-section-left">
                <div className="dashboard-book-section-left-left">
                    <div className="cover">
                        <img src={ props.cover}></img>
                    </div>
                </div>
                <div className="dashboard-book-section-left-right">
                    <div style={{ display: props.display }} className="book-count-down">{ props.date}</div>
                    <div className="book-title">
                        <h4>{props.title}</h4>
                        <p>{props.author}</p>
                    </div>
                    <div className="book-rating">
                        <p>{ props.sinopsis }</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-book-section-right">
                <div style={{display: props.display}} onClick={handleReturn} className="return-button">Kembalikan</div>
            </div>
        </div>
    )
}

export default DashboardBook;