import classes from "./Post.module.css"
import like from "../../assets/discounts/like.png"
import liked from "../../assets/discounts/liked.png"
import save from "../../assets/discounts/save.png"
import saved from "../../assets/discounts/saved.png"
import view from "../../assets/discounts/view.png"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Post = ({ img, logo, name, desc }) => {
    const [ followed, toggleFollowed ] = useState(false)
    console.log(followed)

    desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at laborum perspiciatis expedita, aperiam ad, labore unde reprehenderit magnam maiores possimus fuga numquam commodi dolorum consequatur a dolore corrupti dolores vero sapiente dolorem. Blanditiis molestiae, autem perferendis facere itaque nulla omnis ipsum aliquam minima deleniti odit voluptate placeat accusamus amet?"
    return (
        <div className={classes.container}>
            <div className={classes.imgContainer}>
                <img src={img} alt="" />
            </div>
            <div className={classes.info}>
                <div className={classes.account}>
                    <div className={classes.logo}>
                        <img src={logo} alt="" />
                        <NavLink to="/officials/:id"> {name} </NavLink>
                    </div>
                    <button onClick={() => toggleFollowed(!followed)} className={followed ? classes.followed : classes.notFollowed}> {followed ? "Followed" : "Follow"} </button>
                </div>
                <div className={classes.desc}>
                        <span> Description </span>
                        <p> {desc} </p>
                    <div>
                        <span> Instagram</span>
                        <a> @halkmarket </a>
                    </div>
                    <div>
                        <span> Telefon</span>
                        <a> +993659865245 </a>
                    </div>
                    <div>
                        <span> E-mail</span>
                        <a> halkmarket@halkmarket.com </a>
                    </div>
                </div>
                <div className={classes.actions}>
                    <div> <img src={save} alt="Save" /> </div>
                    <div> 54 <img src={view} alt="Viewed" /> </div>
                    <div> <img src={like} alt="Like" /> </div>
                </div>
            </div>
            
        </div>
    )
}

export default Post