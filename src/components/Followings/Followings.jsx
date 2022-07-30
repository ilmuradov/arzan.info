import { useState } from "react"
import { Items } from "../Officials/Officials"
import galam from "../../assets/logos/galamtm.jpg"
import halkmarket from "../../assets/logos/halkmarket.png"
import nesipetsin from "../../assets/logos/nesipetsin.png"
import ozan from "../../assets/logos/ozan.jpg"
import tekje from "../../assets/logos/tekje.png"
import tmsayt from "../../assets/logos/tmsayt.jpg"
import scopa from "../../assets/logos/scopa.jpg"
import ynamdar from "../../assets/logos/ynamdar.jpg"
import markayoly from "../../assets/logos/markayoly.png"
import block from "../../assets/type-of-view/block.png"
import list from "../../assets/type-of-view/list.png"
import classes from "./Followings.module.css"

const Followings = () => {
    const [ isBlock, toggleIsBlock ] = useState(true)
    return (
        <div className={classes.container}>
            <div className={classes.header}> 
                <h1> Official accounts </h1>
                <div className={classes.typeOfView} onClick={() => toggleIsBlock(!isBlock)}>
                    {isBlock ? 
                        <img className={classes.block} src={list} alt="List" />
                        :
                        <img className={classes.block} src={block} alt="Block" />
                    }
                </div>
            </div>
            <div className={classes.accounts + " " + (isBlock ? classes.blockType : classes.listType)}>
                <Items img={galam} name="Galam" isBlock={isBlock} />
                <Items img={halkmarket} name="Halkmarket" isBlock={isBlock} />
                <Items img={nesipetsin} name="Nesipetsin" isBlock={isBlock} />
                <Items img={ozan} name="Ozan" isBlock={isBlock} />
                <Items img={tekje} name="Tekje" isBlock={isBlock} />
                <Items img={tmsayt} name="TMSayt" isBlock={isBlock} />
                <Items img={scopa} name="Scopa" isBlock={isBlock} />
                <Items img={markayoly} name="Markayoly" isBlock={isBlock} />
                <Items img={ynamdar} name="Ynamdar" isBlock={isBlock} />
                <Items img={galam} name="Galam" isBlock={isBlock} />
                <Items img={halkmarket} name="Halkmarket" isBlock={isBlock} />
                <Items img={nesipetsin} name="Nesipetsin" isBlock={isBlock} />
                <Items img={ozan} name="Ozan" isBlock={isBlock} />
                <Items img={tekje} name="Tekje" isBlock={isBlock} />
                <Items img={tmsayt} name="TMSayt" isBlock={isBlock} />
                <Items img={scopa} name="Scopa" isBlock={isBlock} />
                <Items img={markayoly} name="Markayoly" isBlock={isBlock} />
                <Items img={ynamdar} name="Ynamdar" isBlock={isBlock} />
                <Items img={galam} name="Galam" isBlock={isBlock} />
                <Items img={halkmarket} name="Halkmarket" isBlock={isBlock} />
                <Items img={nesipetsin} name="Nesipetsin" isBlock={isBlock} />
                <Items img={ozan} name="Ozan" isBlock={isBlock} />
                <Items img={tekje} name="Tekje" isBlock={isBlock} />
                <Items img={tmsayt} name="TMSayt" isBlock={isBlock} />
                <Items img={scopa} name="Scopa" isBlock={isBlock} />
                <Items img={markayoly} name="Markayoly" isBlock={isBlock} />
                <Items img={ynamdar} name="Ynamdar" isBlock={isBlock} />
                <Items img={galam} name="Galam" isBlock={isBlock} />
                <Items img={halkmarket} name="Halkmarket" isBlock={isBlock} />
                <Items img={nesipetsin} name="Nesipetsin" isBlock={isBlock} />
            </div>
            <div className={classes.containerBtn}>
                <button className={classes.moreBtn}> More </button>
            </div>
        </div>
    )
}

export default Followings