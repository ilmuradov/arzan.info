import NewsItem from "./News-item"
import classes from "./News.module.css"

const News = () => {
    return (
        <div className={classes.container}>
            <NewsItem category="business" />
            <NewsItem category="sport" />
            <NewsItem category="technology" />
            <NewsItem category="business" />
            <NewsItem category="sport" />
            <NewsItem category="technology" />
        </div>
    )
}

export default News