import classes from "./Header.module.css"
import bell from "../../assets/img/bell.png"
import location_white from "../../assets/img/location-white.png"
import location_green from "../../assets/img/location-green.png"
import favorites from "../../assets/img/favorites.png"
import followings from "../../assets/img/followings.png"
import settings from "../../assets/img/settings.png"
import confirmed from "../../assets/img/confirmed.png"
import pending from "../../assets/img/pending.png"
import logout from "../../assets/img/logout.png"
import notifications from "../../assets/img/notifications.png"
import arzan from "../../assets/logos/arzan.png"
import giper from "../../assets/logos/giper.png"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const navigate = useNavigate()

    const handleScroll = () => {
        const position = window.pageYOffset
        setScrollPosition(position)
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    return (
        <div className={classes.header}>
            <div className={classes.navigation}>
                <div className={classes.logo}>
                    <img className={classes.logo_img} src={arzan} alt="Arzan.info" onClick={() => navigate("/")} />
                </div>

                <div className={classes.profile}>
                    <Profile scrollPosition={scrollPosition} />
                </div>
            </div>

            <div className={scrollPosition > 100 ? classes.sticky : classes.navbar}>
                
                <div className={classes.search}>
                    <input type="text" placeholder="Search..." />
                </div>
                
                <div className={classes.items}>
                    <div onClick={() => navigate("/officials")}> <p> Officials </p> </div>
                    <div onClick={() => navigate("/add")}> 
                        <p> Add </p> 
                    </div>
                    <div onClick={() => navigate("/news")}> 
                        <p> News </p>
                    </div>
                    <div> <p> Top Users </p> </div>
                </div>

                <div className={classes.profile_items}>
                    <div className={classes.profile_items__items}>
                        <div> <p> Konkurs </p> </div>
                        <div onClick={() => navigate("/aboutus")}> <p> About us </p> </div>
                    </div>

                    <div className={classes.profilePlace}>
                        <div className={scrollPosition > 100 ? classes.show : classes.hide}>
                            <Profile scrollPosition={scrollPosition} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Profile = ({scrollPosition}) => {
    const navigate = useNavigate()

    return (
        <>
            <div className={classes.lang}>
                <div className={classes.dropdown}>
                    <div className={classes.dropbtn} 
                        style={scrollPosition > 100 ? {color: "white"}: {color: "var(--color-green)"}}> 
                        EN 
                    </div>

                    <div className={classes.dropdown_menu}>
                        <p >RU</p>
                        <p>TM</p>
                    </div>
                </div>
            </div>
            <div className={classes.dropdown}>
                <div className={classes.dropbtn} style={scrollPosition > 100 ? {color: "white"}: {color: "var(--color-green)"}}>
                    <p> Ashgabat </p>
                    <img className={classes.location} src={scrollPosition > 100 ? location_white : location_green} alt="Location" /> 
                </div>
                <div className={classes.dropdown_menu}>
                    <p>Ahal</p>
                    <p>Mary</p>
                    <p>Lebap</p>
                    <p>Dashoguz</p>
                    <p>Balkan</p>
                </div>
            </div>

            <div onClick={() => navigate("/notifications")} className={classes.notifications}>
                <img src={scrollPosition > 100 ? notifications : bell} alt="Notification" />
            </div>

            <div className={classes.dropdown}>
                <div className={classes.dropbtn}>
                    <div className={classes.profile_photo}>
                        <img src={giper} alt="Profile" />
                    </div>
                </div>

                <div className={classes.dropdown_menu_profile}>
                    <div className={classes.main_info}>
                        <div className={classes.photo}>
                            <img src={giper} alt="Profile" />
                        </div>
                        <div className={classes.name_location}>
                            <div className={classes.name}> <h3> username </h3> </div>
                            <div className={classes.location}>
                                <p> Ashgabat </p>
                                <img src={location_green} alt="Location" /> 
                            </div>
                        </div>
                    </div>
                    <div className={classes.info}>
                        <p onClick={() => navigate("/favorites")}> <img src={favorites} alt=" "  /> Favorites </p>
                        <p onClick={() => navigate("/followings")}> <img src={followings} alt=" " /> Followings </p>
                        <p> <img src={settings} alt=" " /> Settings </p>
                        <p> <img src={confirmed} alt=" " /> Confirmed </p>
                        <p> <img src={pending} alt=" " /> Pending </p>
                        <p> <img src={logout} alt=" " /> Log out </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header