import classes from "./Slider.module.css"
import banner1 from "../../assets/banner/1.jpg"
import banner2 from "../../assets/banner/2.jpg"
import banner3 from "../../assets/banner/3.jpg"
import banner4 from "../../assets/banner/4.jpg"
import banner5 from "../../assets/banner/5.jpg"
const Slider = () => {
    const responsiveSlider = () => {

        var slider = document.getElementById("slider");
        var sliderWidth = slider.offsetWidth;
        var slideList = document.getElementById("slideWrap");
        var count = 1;
        var items = slideList.querySelectorAll("li").length;
        
        window.addEventListener('resize', function() {
          sliderWidth = slider.offsetWidth;
        });
        
        const prevSlide = () => {
          if(count > 1) {
            count = count - 2;
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
          else if(count = 1) {
            count = items - 1;
            slideList.style.left = "-" +  sliderWidth + "px";
            count++;
          }
        };
        
        const nextSlide = () => {
          if(count < items) {
            slideList.style.left = "-" + count * sliderWidth + "px";
            count++;
          }
          else if(count = items) {
            slideList.style.left = "0px";
            count = 1
          }
        };

        setInterval(() => {
          nextSlide()
        }, 5000);
        
    }
        
    return (
        <div className={classes.container} id="slider" onLoad={() => responsiveSlider()}>
            <ul id="slideWrap">
                <li><img src={banner2} alt="Arzan.info" /></li>
                <li><img src={banner3} alt="Arzan.info" /></li>
                <li><img src={banner4} alt="Arzan.info" /></li>
                <li><img src={banner1} alt="Arzan.info" /></li>
                {/* <li><img src={banner5} alt="Arzan.info" /></li> */}
            </ul>
            {/* <button id="left" className={classes.left} onClick={() => prevSlide()}>&#8810;</button>
            <button id="right" className={classes.right} onClick={() => nextSlide()}>&#8811;</button> */}
        </div>
    )
}

export default Slider