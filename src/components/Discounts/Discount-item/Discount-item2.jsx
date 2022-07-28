import { useState } from "react"
import like from "../../../assets/discounts/like.png"
import liked from "../../../assets/discounts/liked.png"
import save from "../../../assets/discounts/save.png"
import saved from "../../../assets/discounts/saved.png"
import classes from "./Discount-item2.module.css"
import logo from "../../../assets/logos/ynamdar.jpg"

export const DiscountItem2 = () => {
    const [ isSaved, toggleSaved ] = useState(false)
    const [ isLiked, toggleLiked ] = useState(false)

    return (
        <div className={classes.item}>
            <div className={classes.img_container}>
                <img src={photo2} alt=" " />
            </div>
            <div className={classes.data}>
                <div className={classes.info}>
                    <div className={classes.name}>
                        <div className={classes.data_data_img}>
                            <img src={logo} alt=" " />
                        </div>
                        <h3> Markayoly </h3>
                    </div>
                    <div className={classes.button}>
                        <button className={classes.btn}> Follow </button>
                    </div>
                </div>
                <div className={classes.actions}>
                    <div>
                        <img onClick={() => toggleSaved(!isSaved)} src={isSaved ? saved : save} alt="Save" />
                        <img onClick={() => toggleLiked(!isLiked)} src={isLiked ? liked : like} alt="Save" />
                    </div>
                </div>
                <div className={classes.details}>
                    <div className={classes.discount}> Discounts <span> -20%</span> </div>
                    <div className={classes.information}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, obcaecati. </div>
                </div>
            </div>
        </div>
    )
}