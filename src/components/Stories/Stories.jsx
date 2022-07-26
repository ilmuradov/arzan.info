import classes from "./Stories.module.css"
import prev from "../../assets/img/left-arrow.png"
import next from "../../assets/img/right-arrow.png"
import { useEffect, useRef, useState } from "react"

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
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
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