export const sideScroll = (element, speed, distance, step) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
        element.scrollLeft += step;
        scrollAmount += Math.abs(step);
        if (scrollAmount >= distance) {
            clearInterval(slideTimer);  
        }
    }, speed);
};

export const scrollCheck = (setscrollX, ref) => {
    setscrollX(ref.current.scrollLeft);
    if (
      Math.floor(ref.current.scrollWidth - ref.current.scrollLeft) <=
      ref.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
}