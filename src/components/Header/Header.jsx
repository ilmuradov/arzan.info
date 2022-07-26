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
import arzan from "../../assets/logos/logo.png"
import giper from "../../assets/logos/giper.png"
import { useEffect, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import Settings from "../Settings/Settings"

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0)

    const scrollAmount = 90

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
                    <div className={classes.dropdown + " " + classes.marginLeft}>
                        <div className={classes.dropbtn} style={scrollPosition > scrollAmount ? {color: "white"}: {color: "var(--color-green)"}}>
                            <p> Ashgabat </p>
                            <img className={classes.location} src={scrollPosition > scrollAmount ? location_white : location_green} alt="Location" /> 
                        </div>
                        <div className={classes.dropdown_menu}>
                            <p>Ahal</p>
                            <p>Mary</p>
                            <p>Lebap</p>
                            <p>Dashoguz</p>
                            <p>Balkan</p>
                        </div>
                    </div>
                </div>

                <div className={classes.profile}>
                    <Profile scrollPosition={scrollPosition} scrollAmount={scrollAmount} />
                </div>
            </div>

            <div className={scrollPosition > scrollAmount ? classes.sticky : classes.navbar}>
                
                <div className={classes.search}>
                    <input type="text" placeholder="Search..." />
                </div>
                
                <div className={classes.items}>
                    <NavLink to="/officials" className={({isActive}) => isActive ? classes.active : undefined}> <p> Officials </p> </NavLink>
                    <NavLink to="/add" className={({isActive}) => isActive ? classes.active : undefined}> <p> Add </p> </NavLink>
                    <NavLink to="/news" className={({isActive}) => isActive ? classes.active : undefined}> <p> News </p> </NavLink>
                </div>

                <div className={classes.profile_items}>
                    <div className={classes.profile_items__items}>
                        <NavLink to="/top" className={({isActive}) => isActive ? classes.active : undefined}> <p> Top Users </p> </NavLink>
                        <NavLink to="/konkurs" className={({isActive}) => isActive ? classes.active : undefined}> <p> Konkurs </p> </NavLink>
                        <NavLink to="aboutus" className={({isActive}) => isActive ? classes.active : undefined}> <p> About us </p> </NavLink>
                    </div>

                    <div className={classes.profilePlace}>
                        <div className={scrollPosition > scrollAmount ? classes.show : classes.hide}>
                            <Profile scrollPosition={scrollPosition} scrollAmount={scrollAmount} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const Profile = ({scrollPosition, scrollAmount}) => {
    const navigate = useNavigate()
    const [ settingsView, toggleSettings ] = useState(false)

    return (
        <>
            <div className={classes.lang}>
                <div className={classes.dropdown}>
                    <div className={classes.dropbtn} 
                        style={scrollPosition > scrollAmount ? {color: "white"}: {color: "var(--color-green)"}}> 
                        EN 
                    </div>

                    <div className={classes.dropdown_menu}>
                        <p >RU</p>
                        <p>TM</p>
                    </div>
                </div>
            </div>

            <div onClick={() => navigate("/notifications")} className={classes.notifications}>
                <img src={scrollPosition > scrollAmount ? notifications : bell} alt="Notification" />
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
                        <p onClick={() => toggleSettings(true)}> <img src={settings} alt=" " /> Settings </p>
                        <p> <img src={confirmed} alt=" " /> Confirmed </p>
                        <p> <img src={pending} alt=" " /> Pending </p>
                        <p> <img src={logout} alt=" " /> Log out </p>
                    </div>
                </div>
                <Settings settings={settingsView} toggleSettings={toggleSettings} photo={giper} />
            </div>
        </>
    )
}

export default Header