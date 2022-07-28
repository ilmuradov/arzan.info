import classes from "./Discounts.module.css"
import { DiscountItem1 } from "./Discount-item/Discount-item"
import { DiscountItem2 } from "./Discount-item/Discount-item2"
import photo1 from "../../assets/discounts/1.jpg"
import photo2 from "../../assets/discounts/2.jpg"


const Discounts = () => {
    const navigate = (href) => {
        window.location.href = href
    }

    return (
        <div className={classes.container}>
        <div className={classes.name}>
            <p> Discounts </p> 
            <p onClick={() => navigate("/discounts")} className={classes.all}> All... </p>
        </div>
        <div className={classes.items}>
            <DiscountItem1 photo={photo1} />
            {/* <DiscountItem2 /> */}
            {/* <DiscountItem2 /> */}
            <DiscountItem1 photo={photo2} />
            <DiscountItem1 photo={photo1} />
            <DiscountItem1 photo={photo2} />
            <DiscountItem1 photo={photo1} />
        </div>
    </div>
    )
}

export default Discounts