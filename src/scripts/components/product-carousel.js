class ProductCarousel extends HTMLElement {
    constructor() {
        super();
        this.handleHorizontalScroll();
    }

    handleHorizontalScroll(){
        const races = document.querySelector(".carousel");
        console.log(races.offsetWidth)
        function getScrollAmount() {
            let racesWidth = races.scrollWidth;
            return -(racesWidth - window.innerWidth);
        }

        const tween = gsap.to(races, {
            x: getScrollAmount,
            duration: 3,
            ease: "none",
        });


        ScrollTrigger.create({
            trigger: ".product-carousel__wrapper",
            start:"top 20%",
            end: () => `+=${getScrollAmount() * -1}`,
            pin:true,
            animation:tween,
            scrub:1,
            invalidateOnRefresh:true,
            markers:false
        })
    }
}

customElements.define("product-carousel", ProductCarousel)