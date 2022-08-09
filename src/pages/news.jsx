import News from "../components/News/News"

const NewsPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            {/* <Header /> */}
            <News />
            {/* <Footer /> */}
        </div>
    )
}

export default NewsPage