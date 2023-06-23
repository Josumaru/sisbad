import PageView from "../PageView/PageView"
import "./Category.css"
import { IoIosArrowBack } from "react-icons/io"
import { useEffect, useState, useRef } from "react"
const Category = (props) => {
    const [hide, setHide] = useState(false);
    const panelRef = useRef()
    const hidePanel = () => {
        setHide(!hide)
    }
    useEffect(() => {
        if (hide) {
            panelRef.current.classList.remove("hide")
        } else {
            panelRef.current.classList.add("hide")
        }
    }, [hide])
    return (
        <div style={{ background: props.color }} className="category-book-section">
            <h5 onClick={hidePanel}>
                {props.category}
            </h5>
            <div ref={panelRef} className="page-view-home">
                <IoIosArrowBack className="back-button" onClick={() => { hidePanel() }} />
                <PageView id_buku={ props.id_buku } category={props.category} query={props.query} />
            </div>
        </div>
    )
}
export default Category;