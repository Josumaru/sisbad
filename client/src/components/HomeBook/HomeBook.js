import "./HomeBook.css"

const Bukupage = (props) => {
    return (
        <div className="buku">
            <div className="cover-book-home">
                <img className="cover-image" src={ props.url }></img>
            </div>
            <h6>{props.judul}</h6>
            <p>{props.penulis}</p>
        </div>
    )
}
export default Bukupage;