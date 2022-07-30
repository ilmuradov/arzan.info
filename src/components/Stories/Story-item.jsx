import { useState } from "react"
import classes from "./Story-item.module.css"
import StoryView from "./Story-view"

const StoryItem = ({img, name, story, id}) => {
    const [ viewStory, toggleView ] = useState(false)

    return (
        <div id="story-item" className={classes.item}>
            <img className={classes.img} src={img} alt=" " onClick={() => toggleView(true)} />
            <StoryView img={img} name={name} story={story} id={id} viewStory={viewStory} toggleView={toggleView} />
        </div>
    )
}

export default StoryItem