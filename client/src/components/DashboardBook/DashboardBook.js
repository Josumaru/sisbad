import "./DashboardBook.css"

const DashboardBook = (props) => {
    return (
        <div className="dashboard-book">
            <div className="dashboard-book-section-left">
                <div className="dashboard-book-section-left-left">
                    <div className="cover">
                        <img src="https://marketplace.canva.com/EAFYHx4rn2w/1/0/1131w/canva-coklat-krem-kreatif-modern-cover-buku-agenda-dokumen-a4-0zKNiSfvTXM.jpg"></img>
                    </div>
                </div>
                <div className="dashboard-book-section-left-right">
                    <div className="book-count-down">3 days left</div>
                    <div className="book-title">
                        <h4>{props.title}</h4>
                        <p>{props.author}</p>
                    </div>
                    <div className="book-rating">
                        <p>Bintang 5</p>
                    </div>
                </div>
            </div>
            <div className="dashboard-book-section-right">
                <div className="return-button">Kembalikan</div>
            </div>
        </div>
    )
}

export default DashboardBook;