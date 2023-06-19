import "./Bukupage.css"

const Bukupage = (props) => {
    return (
        <div style={{ background:props.color}} className="Buku-cover">
            <h5>
                {props.Bukupage}
            </h5>
        </div>
    )
}
export default Bukupage;