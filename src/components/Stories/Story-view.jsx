import classes from "./Story-view.module.css"
import StoryViewItem from "./Story-view-item"
import left from "../../assets/stories/left-arrow.png"
import right from "../../assets/stories/right-arrow.png"

const StoryView = (props) => {
    return (
        <div className={props.viewStory ? classes.viewStory : classes.viewStory__hidden}>
            {props.id === 1 ? null : <StoryViewItem {...props} left={true} />}
            {props.id === 1 ? null : <img src={left} alt=" Previous " />}
            <StoryViewItem {...props} main={true} />
            {props.last ? null : <img src={right} alt=" Next " />}
            <StoryViewItem {...props} right={true} />
        </div>
    )
}

export default StoryView