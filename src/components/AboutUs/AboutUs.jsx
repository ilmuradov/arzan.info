import classes from "./AboutUs.module.css"
import instagram from "../../assets/img/instagram.png"
import youtube from "../../assets/img/youtube.png"
import tiktok from "../../assets/img/tik-tok.png"

const AboutUs = () => {
    return (
        <div className={classes.container}>
            <div className={classes.name}> <h1> About us </h1> </div>
            <p>The multilateral development of our state in the field 
                of the digital economy, approved by the Respected 
                President of Turkmenistan, has rapidly begun to switch 
                to the digital regime in all sectors of the economy of our country. 
                To support the digitalization policy, as well as for the digital 
                development of small and medium-sized businesses in our country, 
                the Arzan project was created.
            </p>
            <p>
                Arzan is an application where you can find and post all discounts, 
                promotions and news from any cities and regions of our country.
            </p>
            <h3> What is special about Arzan? </h3>
            <p>
                The peculiarity of Arzan is that here you can view the tape with 
                discounts and promotions simply and conveniently in all corners 
                of our country. You do not need to spend hours looking for a 
                discount on a particular product, just write the name of the 
                product in the search bar, and it will automatically give you 
                the promotions and discounts you need.
            </p>
            <h3>
                And our main feature is that you can set your own promotions or discounts in Arzan.
            </h3>
            <p>Add your favorite promotions and discounts to your favorites, share them on social networks and let everyone know where the most relevant discounts and promotions are.</p>
            {/* <h3> Our official accounts: </h3>
            <div className={classes.links}>
                <img src={instagram} alt="" />
                <img src={youtube} alt="" />
                <img src={tiktok} alt="" />
            </div> */}
        </div>
    )
}

export default AboutUs