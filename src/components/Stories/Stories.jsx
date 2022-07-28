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
                <StoryItem img={galam} />
                <StoryItem img={tekje} />
                <StoryItem img={halkmarket} />
                <StoryItem img={tmsayt} />
                <StoryItem img={ozan} />
                <StoryItem img={nesipetsin} />
                <StoryItem img={scopa} />
                <StoryItem img={ynamdar} />
                <StoryItem img={markayoly} />
                <StoryItem img={galam} />
                <StoryItem img={tekje} />
                <StoryItem img={halkmarket} />
                <StoryItem img={tmsayt} />
                <StoryItem img={ozan} />
                <StoryItem img={nesipetsin} />
                <StoryItem img={scopa} />
                <StoryItem img={ynamdar} />
                <StoryItem img={markayoly} />
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