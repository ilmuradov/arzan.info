import classes from "./Discounts.module.css"

const Discounts = () => {
    const navigate = (href) => {
        window.location.href = href
    }

    return (
        <div className={classes.container}>
        <div className={classes.name}> 
            <p> Discounts </p> 
            <p onClick={() => navigate("/discounts")} className={classes.all}> All... </p>
        </div>
        <div className={classes.items}>
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
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
    )
}

export default Discounts