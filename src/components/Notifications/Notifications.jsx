import { useState } from "react"
import classes from "./Notifications.module.css"
import tekje from "../../assets/logos/tekje.png"
import tmsayt from "../../assets/logos/tmsayt.jpg"
import scopa from "../../assets/logos/scopa.jpg"
import ynamdar from "../../assets/logos/ynamdar.jpg"
import markayoly from "../../assets/logos/markayoly.png"
import { useNavigate } from "react-router"

const Notifications = () => {
    const [ notifications, toggle ] = useState(true)

    return (
        <div className={classes.container}>
            <div className={classes.name}> <h1> Notifications </h1> </div>
            <div className={classes.type}>
                <div onClick={() => toggle(true)} className={notifications && classes.active}> Notifications </div>
                <div onClick={() => toggle(false)} className={!notifications && classes.active}> Officials </div>
            </div>
            <div className={notifications ? classes.items : classes.hidden}>
                <Notification img={scopa} name="Scopa" />
                <Notification img={ynamdar} name="Ynamdar" />
                <Notification img={markayoly} name="Markayoly" />
                <Notification img={tekje} name="Tekeje" />
                <Notification img={tmsayt} name="TMSayt" />
            </div>
            <div className={!notifications ? classes.officialNotifications : classes.hidden}>
                <Notification img={tekje} name="Tekeje" />
                <Notification img={tmsayt} name="TMSayt" />
                <Notification img={scopa} name="Scopa" />
                <Notification img={ynamdar} name="Ynamdar" />
                <Notification img={markayoly} name="Markayoly" />
                <Notification img={tekje} name="Tekeje" />
                <Notification img={tmsayt} name="TMSayt" />
                <Notification img={scopa} name="Scopa" />
                <Notification img={ynamdar} name="Ynamdar" />
                <Notification img={markayoly} name="Markayoly" />
            </div>
        </div>
    )
}


const Notification = ({ img, name }) => {
    const navigate = useNavigate()
    
    return (
        <div className={classes.notification}>
            <div> <img src={img} alt={name} /> </div>
            <div className={classes.data}>
                <h3 onClick={() => navigate("/officials/:id")}> {name} </h3>
                <p> 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Nihil nemo a qui et numquam! Aspernatur officiis laborum 
                    sequi quasi harum dignissimos! Reprehenderit inventore facilis 
                    officiis qui quasi itaque, quam magnam ipsum nulla. Impedit 
                    quod repudiandae quaerat culpa nesciunt fuga officiis accusamus 
                    unde suscipit, harum delectus rem quo nam sunt cupiditate?
                </p>
            </div>
        </div>
    )
}

export default Notifications