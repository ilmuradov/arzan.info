import classes from "./News-item.module.css"

const NewsItem = ({category}) => {
    return (
        <div className={classes.container}>
            <h1> {category} </h1>
            <div className={classes.text}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, neque! Facere repellendus nostrum at hic earum sit suscipit consequuntur id beatae. Porro esse architecto, laborum dolor voluptatem illo voluptatum explicabo in ipsam eos nisi adipisci praesentium, ab maiores error dolorum, aperiam neque vero inventore corrupti? Doloribus non animi corrupti quisquam esse laborum explicabo facere laudantium! Repellat consequatur quas blanditiis laborum distinctio illo, a nesciunt adipisci nulla, ad ratione quia libero? Quo a minus esse illum consectetur laboriosam eius velit cupiditate. Iusto adipisci omnis facilis eaque non ad suscipit magni accusamus, beatae quae tempore pariatur dolores tenetur harum nobis quidem eos. </p>
            </div>
        </div>
    )
}

export default NewsItem