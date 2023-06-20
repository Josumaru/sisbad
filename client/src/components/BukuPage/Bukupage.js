import "./Bukupage.css"

const Bukupage = (props) => {
    return (
        <div className="book-div">
            <div className="buku-page">
                <div className="cover-book-home-page">
                    <img className="cover-image-page" src={props.cover}></img>
                </div>
            </div>
            <div className="desc">
                <p>{props.judul}</p>
                <p>{props.penulis}</p>
                <p>{props.penerbit}</p>
            </div>
        </div>
    )
}
export default Bukupage;