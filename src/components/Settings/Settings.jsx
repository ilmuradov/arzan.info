import classes from "./Settings.module.css"
import close from "../../assets/discounts/close.png"
import deleteIcon from "../../assets/img/delete.png"
import banner from "../../assets/banner/1.jpg"
import { useRef, useState } from "react"

const Settings = ({ settings, toggleSettings, photo }) => {
    const ref = useRef()
    const [ image, setImage ] = useState([])
    const [ dropdown, toggleDropdown ] = useState(false)

    const uploadPhoto = () => {
        ref.current.click()
    }

    const getInputPhoto = (event) => {
        if(event.target.files && event.target.files[0]) {
            var reader = new FileReader()
            reader.onload = (e) => {
                setImage({photo: e.target.result})
            }
            reader.readAsDataURL(event.target.files[0]);
        }
    }

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
                        <div onClick={() => uploadPhoto()}>
                            <input className={classes.hidden} type="file" id="1" ref={ref} onChange={getInputPhoto} />
                            <p> Change avatar </p>
                            {/* <img src={img} alt=" " className={classes.uploadIcon} /> */}
                        </div>
                    </div>
                    <div className={classes.configurations}>
                        <div className={classes.changeUsername}>
                            <label> Change username </label>
                            <input type="text" placeholder="Username" />
                        </div>
                        <div className={classes.changeUsername}>
                            <label> Change phone number </label>
                            <input type="number" placeholder="+993 61 00 00 00" />
                        </div>
                        <div className={classes.changeUsername}>
                            <label> Category </label>
                            <input type="text" placeholder="Type category" />
                        </div>
                        <div className={classes.selectRegion}>
                            <div className={classes.dropdown}>
                                <label> Edit banners </label>
                                <input onClick={() => toggleDropdown(!dropdown)} placeholder="Choose banner" />
                                <div className={dropdown ? classes.dropdown_menu : classes.hidden} onClick={() => toggleDropdown(false)}>
                                    <Banner img={banner} />
                                    <Banner img={banner} />
                                    <Banner img={banner} />
                                    <Banner img={banner} />
                                </div>
                            </div>
                        </div>
                        <div className={classes.text}>
                            <label> Description </label>
                            <textarea placeholder="Your description" name="" id="" cols="20" rows="5"></textarea>
                        </div>
                        <div className={classes.btn}>
                            <button> Submit </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Banner = ({ img }) => {
    return (
        <div className={classes.banner}>
            <img className={classes.ban} src={img} alt=" " />
            <img className={classes.delete} src={deleteIcon} alt="Delete" />
        </div>
    )
}

export default Settings