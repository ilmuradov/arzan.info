import { useState } from "react"
import classes from "./Story-item.module.css"
import StoryView from "./Story-view"

const StoryItem = ({img}) => {
    const [ viewStory, toggleView ] = useState(false)
    console.log(viewStory)

    return (
        <div className={classes.item} onClick={() => toggleView(true)}>
            <img src={img} alt=" " />
            <StoryView img={img} viewStory={viewStory} toggleView={toggleView} />
        </div>
    )
}

export default StoryItem