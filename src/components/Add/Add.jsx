import classes from "./Add.module.css"
import img from "../../assets/add/photo.png"
import { useRef, useState } from "react"
import rightarrow from "../../assets/img/right-arrow.png"

const Add = () => {
    const ref = useRef()
    const [ dropdown, toggleDropdown ] = useState(false)
    const [ city, changeCity ] = useState(null)
    const [ image, setImage ] = useState([])
    // const [ actives, toggleIsActive ] = useState({})

    // console.log(image)

    const selectCity = (city) => {
        changeCity(city)
        toggleDropdown(false)
    }

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
        <div className={classes.container}>
            <div className={classes.subcontainer}>
                <h1> Add post </h1>
                <div className={classes.choosePhoto}>
                    <div onClick={() => uploadPhoto()}>
                        <input className={classes.hidden} type="file" id="1" ref={ref} onChange={getInputPhoto} />
                        <p> Upload photo </p>
                        <img src={img} alt=" " className={classes.uploadIcon} />
                    </div>
                    {/* {image && image.map(m => <div>
                        <img src={m.photo} />
                    </div>)
                    } */}
                </div>

                <div className={classes.inputs}>
                    <div className={classes.items}>
                        <label> Title </label>
                        <input type="text" />
                    </div >
                    <div className={classes.items}>
                        <label> Description </label>
                        <textarea></textarea>
                    </div>
                    <div className={classes.items}>
                        <label> Old Price </label>
                        <input type="text"/>
                    </div>
                    <div className={classes.items}>
                        <label> New Price </label>
                        <input type="number" />
                    </div>
                    <div className={classes.items}>
                        <label> Phone number </label>
                        <input type="number" placeholder="+993 64 00 00 00" />
                    </div>
                    <div className={classes.dropdown}>
                        <label> Choose city </label>
                        <input onClick={() => toggleDropdown(!dropdown)} value={city ? city : "Choose city..."} />
                        <div className={dropdown ? classes.dropdown_menu : classes.hidden} onClick={() => toggleDropdown(false)}>
                            <DropDownMenuElement city="Ashgabat" selectCity={selectCity} />
                            <DropDownMenuElement city="Ahal" selectCity={selectCity} />
                            <DropDownMenuElement city="Mary" selectCity={selectCity} />
                            <DropDownMenuElement city="Lebap" selectCity={selectCity} />
                            <DropDownMenuElement city="Dashoguz" selectCity={selectCity} />
                            <DropDownMenuElement city="Balkan" selectCity={selectCity} />
                        </div>
                    </div>

                    <div className={classes.hashtags}>
                        <div className={classes.hashtagContainer}>
                            <Hashtags tag="#arzan" />
                            <Hashtags tag="#amatly" />
                            <Hashtags tag="#kompyuter" />
                            <Hashtags tag="#telefon" />
                            <Hashtags tag="#himiya" />
                            <Hashtags tag="#market" />
                            <Hashtags tag="#pasuda" />
                            <Hashtags tag="#blender" />
                            <Hashtags tag="#duhy" />
                            <Hashtags tag="#krem" />
                            <Hashtags tag="#basanoshka" />
                            <Hashtags tag="#sumka" />
                            <Hashtags tag="#jins" />
                            <Hashtags tag="#kovush" />
                            <Hashtags tag="#shypbyk" />
                            <Hashtags tag="#batnik" />
                            <Hashtags tag="#matalar" />
                            <Hashtags tag="#halylar" />
                        </div>
                    </div>

                    <div className={classes.postTypeContainer}>
                        <PostType />
                    </div>

                </div>
                <div className={classes.btn}>
                    <img src={rightarrow} alt="Post" />
                </div>
            </div>
        </div>
    )
}

export const DropDownMenuElement = ({city, selectCity}) => {
    return (
        <p onClick={() =>  selectCity(city)}> {city} </p>
    )
}

const Hashtags = ({ tag }) => {
    const [ active, toggleActive ] = useState(false)


    return (
        <div onClick={() => toggleActive(!active)}  className={active ? classes.active : classes.hashtag}>
            <p> {tag} </p>
        </div>
    )
}

const PostType = () => {
    const [ active, setActive ] = useState(null)

    return (
        <div className={classes.postType}>
            <PostTypeElement type={"Pending"} setActive={setActive} active={active} />
            <PostTypeElement type={"Post"} setActive={setActive} active={active} />
            <PostTypeElement type={"Recommended"} setActive={setActive} active={active} />
        </div>
    )
}

const PostTypeElement = ({type, setActive, active}) => {
    return (
        <div className={type === active ? classes.activeType : null} onClick={() =>  setActive(type)}>
            <p> {type} </p>
        </div>
    )
}

export default Add