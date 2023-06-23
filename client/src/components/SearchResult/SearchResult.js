import "./SearchResult.css"
const SearchResult = (props) => {
    return (
        <div className="search-bar-components">
            <div>
                <img src={props.cover}></img>
            </div>
                <p>{props.judul}</p>
        </div>
    )
}

export default SearchResult;