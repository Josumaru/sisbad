import "./Category.css"
import { useNavigate } from "react-router-dom"


const Category = (props) => {
    const navigate = useNavigate();
    return (
        <div onClick={() => { navigate(props.navigate)} } style={{ background: props.color }} className="category-book-section">
            <h5>
                {props.category}
            </h5>
        </div>
    )
}
export default Category;