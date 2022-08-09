import Discounts from "../components/Discounts/Discounts"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Recommended from "../components/Recommended/Recommended"
import Slider from "../components/Slider/Slider"
import Stories from "../components/Stories/Stories"

const Main = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            {/* <Header /> */}
            <Slider />
            <Stories />
            <Recommended />
            <Discounts />
            {/* <Footer /> */}
        </div>
    )
}

export default Main