import DiscountsAll from "../components/Discounts/Discounts-all"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"

const DiscountsPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <DiscountsAll />
        </div>
    )
}

export default DiscountsPage