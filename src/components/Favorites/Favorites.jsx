import RecommendItem from "../Recommended/Recommended-item"
import recommended1 from "../../assets/recommended/1.jpg"
import recommended3 from "../../assets/recommended/3.jpg"
import recommended4 from "../../assets/recommended/4.jpg"
import classes from "./Favorites.module.css"
import DiscountItem1 from "../Discounts/Discount-item/Discount-item"
import { useState } from "react"

const Favorites = () => {
    const [ recommends, toggle ] = useState(true)

    return (
        <div className={classes.container}>
            <div className={classes.name}> <h1> Favorites </h1> </div>
            <div className={classes.type}>
                <div onClick={() => toggle(true)} className={recommends && classes.active}> Recommends </div>
                <div onClick={() => toggle(false)} className={!recommends && classes.active}> Discounts </div>
            </div>
            <div className={recommends ? classes.recommendedItems : classes.hidden}>
                <RecommendItem photo={recommended1} />
                <RecommendItem photo={recommended4} />
                <RecommendItem photo={recommended3} />
                <RecommendItem photo={recommended1} />
                <RecommendItem photo={recommended4} />
                <RecommendItem photo={recommended3} />
                <RecommendItem photo={recommended1} />
                <RecommendItem photo={recommended1} />
                <RecommendItem photo={recommended4} />
                <RecommendItem photo={recommended3} />
                <RecommendItem photo={recommended1} />
                <RecommendItem photo={recommended1} />
                <RecommendItem photo={recommended4} />
                <RecommendItem photo={recommended3} />
                <RecommendItem photo={recommended1} />
            </div>
            <div className={!recommends ? classes.discountItems : classes.hidden}>
                <DiscountItem1 photo={recommended1} />
                <DiscountItem1 photo={recommended3} />
                <DiscountItem1 photo={recommended4} />
                <DiscountItem1 photo={recommended1} />
                <DiscountItem1 photo={recommended3} />
                <DiscountItem1 photo={recommended1} />
                <DiscountItem1 photo={recommended4} />
            </div>
        </div>
    )
}

export default Favorites