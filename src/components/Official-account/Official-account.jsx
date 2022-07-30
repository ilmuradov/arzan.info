import classes from "./Official-account.module.css"
import banner from "../../assets/banner/1.jpg"
import logo from "../../assets/logos/ozan.jpg"
import block from "../../assets/type-of-view/block.png"
import list from "../../assets/type-of-view/list.png"
import ozan from "../../assets/logos/ozan.jpg"
import tekje from "../../assets/logos/tekje.png"
import tmsayt from "../../assets/logos/tmsayt.jpg"
import scopa from "../../assets/logos/scopa.jpg"
import ynamdar from "../../assets/logos/ynamdar.jpg"
import markayoly from "../../assets/logos/markayoly.png"
import recommended1 from "../../assets/recommended/1.jpg"
import recommended3 from "../../assets/recommended/3.jpg"
import recommended4 from "../../assets/recommended/4.jpg"
import recommended5 from "../../assets/recommended/5.jpg"
import { useState } from "react"
import DiscountItem1 from "../Discounts/Discount-item/Discount-item"
import { Items } from "../Officials/Officials"

const OfficialAccount = () => {
    const [ selected, changeSelected ] = useState("Posts")
    const [ isFollowed, toggle ] = useState(false)

    return (
        <>
            <div className={classes.container}>
                <div className={classes.banner}>
                    <div className={classes.logoContainer}>
                        <img className={classes.logo} src={logo} alt=" " />
                    </div>
                    <img className={classes.bannerImg} src={banner} alt=" " />
                </div>
                <div className={classes.account}>
                    <div> <h1> Ozan </h1> </div>
                    <div className={classes.cities}> AG, LB, BN </div>
                    <div className={classes.info}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
                        Ratione consequuntur sit, illum excepturi accusantium magni 
                        quos quasi eveniet harum quibusdam iusto nihil illo beatae 
                        quisquam eaque asperiores corporis est itaque ullam labore 
                        ut facilis! Impedit, et fuga! Maxime magnam veritatis, nihil 
                        eos, laudantium neque ducimus veniam possimus quas nostrum 
                        quisquam aspernatur dolorem, qui earum ex iste vel aperiam! 
                        Minima odio neque, accusantium voluptates corporis asperiores 
                        ipsa obcaecati.
                    </div>
                    <div className={isFollowed ? classes.followed : classes.notFollowed}> 
                        <button onClick={() => toggle(!isFollowed)}> {isFollowed ? "Followed" : "Follow"} </button> 
                    </div>
                    <div>
                        <div className={classes.data}>
                            <Select type="Posts" count={43} selected={selected} changeSelected={changeSelected} />
                            <Select type="Followers" count={273} selected={selected} changeSelected={changeSelected} />
                            <Select type="Like" count={303} selected={selected} changeSelected={changeSelected} />
                        </div>
                    </div>
                </div>
            </div>
            <Selected type={selected} />
        </>
    )
}

const Select = ({ type, count, selected, changeSelected }) => {

    return (
        <div className={type === selected ? classes.active : classes.data_div} onClick={() => changeSelected(type)}>
            { type } ({ count })
        </div>
    )
}

const Selected = ({ type }) => {
    const [isBlock, toggle] = useState(true)

    return (
        <div className={classes.selected}>
            <div className={classes.name}>
                <h1> {type} </h1>
                <img src={isBlock ? list : block} onClick={() => toggle(!isBlock)} alt="Type of view" />
            </div>
            {type === "Posts" && <Posts isBlock={isBlock} />}
            {type === "Followers" && <Followers isBlock={isBlock} />}
        </div>
    )
}

const Posts = ({isBlock}) => {
    return (
        <div className={isBlock ? classes.postsBlock : classes.postsList}>
            <div className={isBlock && classes.blockItem}>
                <DiscountItem1 photo={recommended1} />
            </div>
            <div className={isBlock && classes.blockItem}>
                <DiscountItem1 photo={recommended3} />
            </div>
            <div className={isBlock && classes.blockItem}>
                <DiscountItem1 photo={recommended1} />
            </div>
            <div className={isBlock && classes.blockItem}>
                <DiscountItem1 photo={recommended5} />
            </div>
            <div className={isBlock && classes.blockItem}>
                <DiscountItem1 photo={recommended3} />
            </div>
            <div className={isBlock && classes.blockItem}>
                <DiscountItem1 photo={recommended4} />
            </div>
            <div className={isBlock && classes.blockItem}>
                <DiscountItem1 photo={recommended3} />
            </div>
        </div>
    )
}

const Followers = ({isBlock}) => {
    return (
        <div className={isBlock ? classes.followersBlock : classes.followersList }>
            <Items img={tekje} name="Tekje" isBlock={isBlock} />
            <Items img={tmsayt} name="TMsayt" isBlock={isBlock} />
            <Items img={scopa} name="Scopa" isBlock={isBlock} />
            <Items img={tmsayt} name="TMsayt" isBlock={isBlock} />
            <Items img={markayoly} name="Markayoly" isBlock={isBlock} />
            <Items img={markayoly} name="Markayoly" isBlock={isBlock} />
            <Items img={scopa} name="Scopa" isBlock={isBlock} />
            <Items img={ynamdar} name="Ynamdar" isBlock={isBlock} />
            <Items img={tekje} name="Tekje" isBlock={isBlock} />
            <Items img={ynamdar} name="Ynamdar" isBlock={isBlock} />
        </div>
    )
}

export default OfficialAccount