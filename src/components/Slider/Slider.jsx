import classes from "./Slider.module.css"
import banner1 from "../../assets/banner/1.jpg"
import banner2 from "../../assets/banner/2.jpg"
import banner3 from "../../assets/banner/3.jpg"
import banner4 from "../../assets/banner/4.jpg"
import banner5 from "../../assets/banner/5.jpg"
const Slider = () => {
    return (
        <div className={classes.container}>
            <SliderImg />
        </div>
    )
}

const SliderImg = () => {
    return (
        <div className={classes.img}>
            <img src={banner5} alt="Arzan.info" />
        </div>
    )
}

export default Slider