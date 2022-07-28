import classes from "./Story-view.module.css"

const StoryView = ({ img, viewStory, toggleView }) => {
    return (
        <div className={viewStory ? classes.viewStory : classes.viewStory__hidden}>
            <div className={viewStory ? classes.storyContainer : null}>
                <img src={img} alt="" />
                <div>
                    <button onClick={() => toggleView(false)}> Close </button>
                </div>
                <div style={{background: "black"}}></div>
            </div>
        </div>
    )
}

export default StoryView