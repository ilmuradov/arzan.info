import classes from "./Stories.module.css"
import prev from "../../assets/img/left-arrow.png"
import next from "../../assets/img/right-arrow.png"
import { useEffect, useRef, useState } from "react"
import StoryItem from "./Story-item"
import galam from "../../assets/logos/galamtm.jpg"
import halkmarket from "../../assets/logos/halkmarket.png"
import nesipetsin from "../../assets/logos/nesipetsin.png"
import ozan from "../../assets/logos/ozan.jpg"
import tekje from "../../assets/logos/tekje.png"
import tmsayt from "../../assets/logos/tmsayt.jpg"
import scopa from "../../assets/logos/scopa.jpg"
import ynamdar from "../../assets/logos/ynamdar.jpg"
import markayoly from "../../assets/logos/markayoly.png"
import story1 from "../../assets/stories/story1.jpg"

const Stories = () => {
    const ref = useRef(null)

    var count = 1
    var items = 0
    const width = 171
    useEffect(() => {
        items = ref.current.children.length
    }, [])

    const prevStory = () => {
        if(count > 1) {
            count = count - 2
            ref.current.style.left = "-" + count * width + "px"
            count++
        } else if(count = 1) {
            count = items - 1
            ref.current.style.left = "-" + count * width + "px"
            count++
        }
    }

    const nextStory = () => {
        if(count < items) {
            ref.current.style.left = "-" + count * width + "px"
            count ++
        } else if(count = items) {
            ref.current.style.left = "0px"
            count = 1
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.name}>
                <p> Stories </p>
            </div>
            <div className={classes.stories} ref={ref} id="stories">
                <StoryItem img={galam} name="Galam" story={story1} id={1} />
                <StoryItem img={tekje} name="Tekje" story={story1} id={2} />
                <StoryItem img={halkmarket} name="Halkmarket" story={story1} id={3} />
                <StoryItem img={tmsayt} name="TMSayt" story={story1} id={4} />
                <StoryItem img={ozan} name="Ozan" story={story1} id={5} />
                <StoryItem img={nesipetsin} name="NesipEtsin" story={story1} id={6} />
                <StoryItem img={scopa} name="Scopa" story={story1} id={7} />
                <StoryItem img={ynamdar} name="Ynamdar" story={story1} id={8} />
                <StoryItem img={markayoly} name="Markayoly" story={story1} id={9} />
                <StoryItem img={galam} name="Galam" story={story1} id={10} />
                <StoryItem img={tekje} name="Tekje" story={story1} id={11} />
                <StoryItem img={halkmarket} name="Halkmarket" story={story1} id={12} />
                <StoryItem img={tmsayt} name="TMSayt" story={story1} id={13} />
                <StoryItem img={ozan} name="Ozan" story={story1} id={14} />
                <StoryItem img={nesipetsin} name="NesipEtsin" story={story1} id={15} />
                <StoryItem img={scopa} name="Scopa" story={story1} id={16} />
                <StoryItem img={ynamdar} name="Ynamdar" story={story1} id={17} />
                <StoryItem img={markayoly} name="Markayoly" story={story1} id={18} />
            </div>

            <div className={classes.prev}> 
                <div onClick={() => prevStory()}>
                    <img src={prev} alt="Previous" />
                </div>
            </div>  

            <div  className={classes.next}>
                <div onClick={() => nextStory()}>
                    <img src={next} alt="Next" />
                </div>
            </div>

        </div>
    )
}

export default Stories