import classes from "./Footer.module.css"
import info from "../../assets/img/info-btn.png"
import question from "../../assets/img/question-btn.png"
import rules from "../../assets/img/rules-btn.png"
import payment from "../../assets/img/credit-card.png"
import phone from "../../assets/img/phone-btn.png"
import mail from "../../assets/img/email-btn.png"
import download from "../../assets/img/download-btn.png"


const Footer = () => {
    return (
        <div className={classes.container}>
            <div className={classes.logo_info}>
                <div>
                    <h1> Arzan </h1>
                    <span> Discounts from all over our country </span>
                </div>
                <p> Arzan is a mobile application that includes promotions and 
                    discounts from all over our country. Stay up to date with 
                    all the best promotions and discounts, or send your own promotions 
                    and discounts to let everyone know about them. 
                </p>
            </div>
            <div className={classes.navigate}>
                <ul>
                    <li> <img src={info} alt="About" /> About </li>
                    <li> <img src={question} alt="FAQ" /> FAQ </li>
                    <li> <img src={rules} alt="Rules" /> Rules </li>
                    <li> <img src={payment} alt="Payment" /> Payment </li>
                    <li> <img src={phone} alt="Phone" /> (+993) 64 10 34 44 </li>
                    <li> <img src={mail} alt="E-mail" /> info@arzan.info </li>
                    <li> <img src={download} alt="Download" /> Download Arzan.apk </li>
                </ul>
            </div>
            <div className={classes.links}>
                <div>
                    <i class="fas fa-clock"></i>
                    <i class="fas fa-instagram"></i>
                    <i class="fab fa-tiktok fa-2x"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer