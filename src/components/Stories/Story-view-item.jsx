import close from "../../assets/discounts/close.png"
import classes from "./Story-view-item.module.css"

const StoryViewItem = (props) => {
    return (
        <div className={props.viewStory ? (props.main ? classes.story : (props.left ? classes.storyMiniLeft : classes.storyMini) ) : null}>
            <div className={classes.storyContainer}>
                <div className={classes.info}>
                    <div className={classes.name}>
                        <img src={props.img} alt="" />
                        <h3> {props.name} </h3>
                    </div>
                    {
                        props.main ?
                            <div className={classes.btn}>
                                <img src={close} alt="Close" onClick={() => props.toggleView(false)} />
                            </div>
                        :
                        null 
                    }
                </div>
                <div className={classes.content}>
                    {props.main ? <div></div> : null}
                    <img src={props.story} alt=" " />
                </div>
            </div>
        </div>
    )
}

export default StoryViewItem