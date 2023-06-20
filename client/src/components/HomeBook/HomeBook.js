import "./HomeBook.css"

const Bukupage = (props) => {
    return (
        <div className="buku">
            <div className="cover-book-home">
                <img className="cover-image" src={ props.url }></img>
            </div>
            <p>{props.judul}</p>
            <p>{props.penulis}</p>
        </div>
    )
}
export default Bukupage;