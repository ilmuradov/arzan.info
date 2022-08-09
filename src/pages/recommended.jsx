import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import RecommendedAll from "../components/Recommended/Recommended-all"

const RecommendedPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <RecommendedAll />
        </div>
    )
}

export default RecommendedPage