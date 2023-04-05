import './Progress.css'

const ProgressBar = (props) => {
    return (
        <div className="progress" role="progressbar" aria-label="progress">
            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: `${getPercent(props.years)}%` }}>
                {props.years}{props.years > 1 ? ` years` : ` year`}
            </div>
        </div>
    )
}

const getPercent = (years) => {
    return (years / 3) * 100
}

export default ProgressBar