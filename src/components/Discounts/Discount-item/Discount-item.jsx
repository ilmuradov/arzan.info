import { useState } from "react"
import like from "../../../assets/discounts/like.png"
import liked from "../../../assets/discounts/liked.png"
import save from "../../../assets/discounts/save.png"
import saved from "../../../assets/discounts/saved.png"
import classes from "./Discount-item.module.css"
import logo from "../../../assets/logos/ynamdar.jpg"
import view from "../../../assets/discounts/view.png"
import QuickView from "../../QuickView/Quick-view"

export const DiscountItem1 = ({photo}) => {
    const [ isSaved, toggleSaved ] = useState(false)
    const [ isLiked, toggleLiked ] = useState(false)
    const [ quickView, toggleQuickView ] = useState(false)
    // console.log(quickView)

    const payload = {logo, photo, isSaved, isLiked, toggleLiked, toggleSaved}

    return (
        <div className={classes.item}>
            <div className={classes.item_img}>
                <img src={photo} alt=" " />
            </div>
            <div className={classes.data}>
                <div className={classes.data_data}>
                    <div className={classes.info}>
                        <div className={classes.data_data_img}>
                            <img src={logo} alt="" />
                        </div>
                        <h2> Ynamdar </h2>
                    </div>
                    <div className={classes.discount}> Discounts <span>-20%</span> </div>
                    <div className={classes.information}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, obcaecati. </div>
                    <div className={classes.actions}>
                        <img className={!isSaved ? classes.dislike : classes.like} onClick={() => toggleSaved(!isSaved)} src={isSaved ? saved : save} alt="Save" />
                        <img className={!isLiked ? classes.dislike : classes.like} onClick={() => toggleLiked(!isLiked)} src={isLiked ? liked : like} alt="Save" />
                        <img onClick={() => toggleQuickView(true)} src={view} alt="Quick view" />
                    </div>
                    <div className={classes.btn}>
                        <button> View </button>
                    </div>
                </div>
            </div>
            <QuickView quickView={quickView} toggleQuickView={toggleQuickView} {...payload} />
        </div>
    )
}