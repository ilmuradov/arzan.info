import NewsItem from "./News-item"
import classes from "./News.module.css"

const News = () => {
    return (
        <div className={classes.container}>
            <NewsItem />
            <NewsItem />
            <NewsItem />
            <NewsItem />
        </div>
    )
}

export default News