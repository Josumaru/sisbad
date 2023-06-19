import "./Category.css"

const Category = (props) => {
    return (
        <div style={{ background:props.color}} className="category-book-section">
            <h5>
                {props.category}
            </h5>
        </div>
    )
}
export default Category;