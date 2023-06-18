import "./Progress.css"
import { RxDownload } from "react-icons/rx"
const Progress = (props) => {

    return (
        <div className="progress">
            <div className="progress-section-left">
                <RxDownload style={{ fontSize: "24px", color: props.color, rotate: props.rotate }} />
            </div>
            <div className="progress-section-right">
                <div className="context">
                    <p>{props.context}</p>
                    <p>{ props.calc}</p>
                </div>
                <div className="progress-bar-container">
                    <div style={{ width: props.status, backgroundColor: props.color }} className="progress-bar"></div>
                </div>
            </div>
        </div>
    )
}
export default Progress;