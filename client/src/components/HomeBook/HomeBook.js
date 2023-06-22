import "./HomeBook.css"

const Bukupage = (props) => {
    return (
        <div className="buku">
            <div className="cover-book-home">
                <img className="cover-image" src={ props.url }></img>
            </div>
            <h6 style={{textIndent: props.indent}}>{props.judul}</h6>
            <p style={{textIndent: props.indent}}>{props.penulis}</p>
        </div>
    )
}
export default Bukupage;