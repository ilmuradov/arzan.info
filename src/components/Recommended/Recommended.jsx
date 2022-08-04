import { useEffect, useRef, useState } from "react"
import classes from "./Recommended.module.css"
import prev from "../../assets/img/left-arrow.png"
import next from "../../assets/img/right-arrow.png"
import RecommendItem from "./Recommended-item"
import recommended1 from "../../assets/recommended/1.jpg"
import recommended3 from "../../assets/recommended/3.jpg"
import recommended4 from "../../assets/recommended/4.jpg"
import recommended5 from "../../assets/recommended/5.jpg"
import recommended6 from "../../assets/recommended/6.gif"
// import recommended7 from "../../assets/recommended/7.mp4"

const Recommended = () => {
    const ref = useRef(null)

    var count = 1
    var items = 0
    var left = 0
    const width = 320

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
        } else if(count === items) {
            ref.current.style.left = "0px"
            count = 1
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.name}> 
                <p> Recommended (+32) </p> 
                <div>
                    <img src="" alt="" />
                    <img src="" alt="" />
                    <p className={classes.all} onClick={() => navigate("/recommended")}> All... </p>
                </div>
            </div>
            <div className={classes.itemsContainer}>
                <div className={classes.items} ref={ref}>
                    {/* <button onClick={() => scrollRight(200)}> next </button> */}
                    <RecommendItem photo={recommended6} />
                    {/* <RecommendItem photo={recommended2} /> */}
                    <RecommendItem photo={recommended3} />
                    <RecommendItem photo={recommended4} />
                    <RecommendItem photo={recommended5} />
                    <RecommendItem photo={recommended1} />
                    {/* <RecommendItem photo={recommended2} /> */}
                    <RecommendItem photo={recommended3} />
                    <RecommendItem photo={recommended4} />
                    <RecommendItem photo={recommended5} />
                </div>
            </div>

            <div className={classes.prev}> 
                <div onClick={() => prevStory()}>
                    <img src={prev} alt="Previous" />
                </div>
            </div>

            <div  className={classes.next}>
                <div  onClick={() => nextStory()}>
                    <img src={next} alt="Next" />
                </div>
            </div>

        </div>
    )
}

export default Recommended