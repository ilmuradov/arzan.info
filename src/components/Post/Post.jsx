import classes from "./Post.module.css"
import likeIcon from "../../assets/discounts/like.png"
import likedIcon from "../../assets/discounts/liked.png"
import saveIcon from "../../assets/discounts/save.png"
import savedIcon from "../../assets/discounts/saved.png"
import view from "../../assets/discounts/view.png"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import Recommended from "../Recommended/Recommended"

const Post = ({ img, logo, name, desc }) => {
    const [ followed, toggleFollowed ] = useState(false)
    const [ liked, like ] = useState(false)
    const [ saved, save ] = useState(false)
    console.log(followed)

    desc = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat at laborum perspiciatis expedita, aperiam ad, labore unde reprehenderit magnam maiores possimus fuga numquam commodi dolorum consequatur a dolore corrupti dolores vero sapiente dolorem. Blanditiis molestiae, autem perferendis facere itaque nulla omnis ipsum aliquam minima deleniti odit voluptate placeat accusamus amet?"
    return (
        <div className={classes.container}>
            <div className={classes.postContainer}>
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
                        <div onClick={() => save(!saved)}> 
                            <img className={saved ? classes.saved : classes.notSaved} 
                                src={saved ? savedIcon : saveIcon} alt="Save" 
                            /> 
                        </div>
                        
                        <div> 54 <img src={view} alt="Viewed" /> </div>
                        
                        <div onClick={() => like(!liked)}> 
                            <img className={saved ? classes.liked : classes.notLiked} 
                                src={liked ? likedIcon : likeIcon} alt="Like" 
                            /> 
                        </div>
                    </div>
                </div>
            </div>
            <Recommended />
        </div>
    )
}

export default Post