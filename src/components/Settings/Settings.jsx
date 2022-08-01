import classes from "./Settings.module.css"
import close from "../../assets/discounts/close.png"

const Settings = ({ settings, toggleSettings, photo }) => {
    return (
        <div className={settings ? classes.container : classes.hidden}>
            <div className={settings ? classes.settingsContainer : classes.hidden}>
                <div className={classes.name}> 
                    <h1> Settings </h1> 
                    <img onClick={() => toggleSettings(false)} src={close} alt="Close" />
                </div>
                <div className={classes.main}>
                    <div className={classes.changePhoto}>
                        <img src={photo} alt="" />
                    </div>
                    <div className={classes.configurations}>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Settings