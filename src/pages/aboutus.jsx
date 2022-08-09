import AboutUs from "../components/AboutUs/AboutUs"

const AboutUsPage = ({ fromTop }) => {
    return (
        <div onLoad={fromTop}>
            <AboutUs />
        </div>
    )
}

export default AboutUsPage