import classes from "./Quick-view.module.css"
import close from "../../assets/discounts/close.png"
import like from "../../assets/discounts/like.png"
import liked from "../../assets/discounts/liked.png"
import save from "../../assets/discounts/save.png"
import saved from "../../assets/discounts/saved.png"


const QuickView = ({logo, photo, quickView, toggleQuickView, isSaved, isLiked, toggleLiked, toggleSaved}) => {
    debugger
    return (
        <div className={quickView ? classes.quickView : classes.quickView__hidden}>
            <div className={quickView ? classes.quickContainer : null}>
                <div className={classes.accountInfo}>
                    <div className={classes.accountName}>
                        <div className={classes.accountLogo}>
                            <img src={logo} alt=" " />
                        </div>
                        <h3> Ynamdar </h3>
                    </div>
                    <div className={classes.closeBtn}>
                        <img src={close} alt=" Close " onClick={() => toggleQuickView(false)} />
                    </div>
                </div>
                <div className={classes.discountData}>
                    <div className={classes.photoDiv}>
                        <div>
                            <img src={photo} alt="  " />
                        </div>
                    </div>
                    <div className={classes.infoDiv}>
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Natus atque tempora aliquid ipsum. Voluptas eaque et quos 
                            molestiae eligendi autem, maxime at itaque, doloremque enim 
                            quia adipisci dolorem, magni similique beatae? Nulla culpa 
                            odio, possimus explicabo ullam obcaecati natus velit tenetur 
                            id minima modi recusandae hic sapiente voluptate maiores 
                            eligendi.
                        </div>
                        <div className={classes.actions}>
                            <img onClick={() => toggleSaved(!isSaved)} src={isSaved ? saved : save} alt="Save" />
                            <img onClick={() => toggleLiked(!isLiked)} src={isLiked ? liked : like} alt="Save" />
                    </div>
                    </div>
                </div>
                <div>
                    <button > Go to post </button>
                </div>
            </div>
        </div>
    )
}

export default QuickView