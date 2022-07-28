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
    const [scrollX, setscrollX] = useState(0)
    const [scrolEnd, setscrolEnd] = useState(false)

    useEffect(() => {
        if (
          ref.current &&
          ref?.current?.scrollWidth === ref?.current?.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
        return () => {};
      }, [ref?.current?.scrollWidth, ref?.current?.offsetWidth]
    )

    const scrollCheck = () => {
        setscrollX(ref.current.scrollLeft);
        if (
          Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <=
          ref.current.offsetWidth
        ) {
          setscrolEnd(true);
        } else {
          setscrolEnd(false);
        }
    }

    const sideScroll = (element, speed, distance, step) => {
        let scrollAmount = 0;
        const slideTimer = setInterval(() => {
            element.scrollLeft += step;
            scrollAmount += Math.abs(step);
            if (scrollAmount >= distance) {
                clearInterval(slideTimer);  
            }
        }, speed);
      };

    return (
        <div className={classes.container}>
            <div className={classes.name}>
                <p> Stories </p>
            </div>
            <div className={classes.stories} ref={ref} onScroll={scrollCheck}>
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

            {scrollX > 200 && (
                <div className={classes.prev}> 
                    <div onClick={() => sideScroll(ref.current, 15, 300, -10)}>
                        <img src={prev} alt="Previous" />
                    </div>
                </div>  
            )}

            {!scrolEnd && (
                <div  className={classes.next}>
                    <div  onClick={() => sideScroll(ref.current, 15, 300, 10)}>
                        <img src={next} alt="Next" />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Stories