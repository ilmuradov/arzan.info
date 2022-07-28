import classes from "./Add.module.css"
import img from "../../assets/add/photo.png"

const Add = () => {
    return (
        <div className={classes.container}>
            <div className={classes.subcontainer}>
                <div className={classes.choosePhoto}>
                    <div>
                        <p> Upload photo </p>
                        <img src={img} alt=" " />
                    </div>
                    <div>
                        <p> Upload photo </p>
                        <img src={img} alt=" " />
                    </div>
                    <div>
                        <p> Upload photo </p>
                        <img src={img} alt=" " />
                    </div>
                </div>

                <div className={classes.inputs}>
                    <input type="text" />
                    <input type="text" />
                    <input type="text" />
                    <textarea name="" id="" cols="30" rows="8"></textarea>
                </div>
            </div>
        </div>
    )
}

export default Add