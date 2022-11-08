export class Carousel {
    constructor() {
        this.init();
        this.activeItem();
        this.onBreakPointChange();
    }

    init(){
        // 셀렉터
        let section = document.querySelector(".home-kv-carousel");
        const progressItem = document.querySelectorAll('.indicator__progress-item');
        const productLine = document.querySelectorAll('.indicator__product-line');
        const videoControls = document.querySelector(".indicator__controls");

        // 초기화
        let sw_carousel, windowWidth, skin, slides, activeSlideCta, allCta, allSlide, videoClass;
        sw_carousel = new Swiper('.sw-carousel', {
            effect: 'fade',
            loop: true,
            speed: 300,
            navigation: {
                prevEl: '.arrow-indicator--prev',
                nextEl: '.arrow-indicator--next'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
        });
        slides = sw_carousel.slides;
        windowWidth = window.innerWidth;


        // event binding
        function clickToSlide() {
            for (let i = 0; i < progressItem.length; i++) {
                progressItem[i].addEventListener('click', function () {
                    sw_carousel.slideTo(i + 1, 1000, false);
                });
            }
        }
        function mobileFocusEnter(){
            for(let i = 0; i < productLine.length; i++) {
                productLine[i].addEventListener("keypress", function(e){
                    (e.key == "Enter" ) ?  sw_carousel.slideTo(i+1, 300, false) : '';
                });
            }
        }
        window.addEventListener("resize", deviceCheckFocus);
        videoControls.addEventListener("click", videoEvent);

        // ============ activeItem() =============
        function videoEvent() {
            videoClass = videoControls.classList;
            if( videoClass.contains("play") ) {
                videoClass.remove("play");
            } else {
                videoClass.add("play");
            }
        }

        function progressActive(){
            for(let j = 0; j < progressItem.length; j++) {
                progressItem[j].classList.remove("indicator-active");
            }
            progressItem[sw_carousel.realIndex].classList.add("indicator-active");
        }
        
        function skinColor(){
            skin = slides[sw_carousel.realIndex].getAttribute("data-skin-color");
            (skin == "black") ? section.classList.add("home-kv-carousel--black") : section.classList.remove("home-kv-carousel--black")
        }

        function mobileTab() {
            for(let i = 0; i < productLine.length; i++) {
                productLine[i].setAttribute("tabindex", "0");
                productLine[i].setAttribute("aria-hidden", "false");
            }
            console.log("mobileTab");
        }

        function pcTab() {
            for(let i = 0; i < productLine.length; i++) {
                productLine[i].setAttribute("tabindex", "-1");
                productLine[i].setAttribute("aria-hidden", "true");
            }
            console.log("pcTab");
        }

        function deviceCheckFocus(){
            windowWidth = window.innerWidth;
            (windowWidth < 768 ) ? mobileTab() : pcTab();
        }

        function ctaFocus(){
            activeSlideCta = document.querySelector(".swiper-slide-active").querySelectorAll("#cta");
            allSlide = section.querySelectorAll(".swiper-slide")
            
            for(let i = 0; i < allSlide.length; i++) {
                allCta = allSlide[i].querySelectorAll("#cta");
                for(let j = 0; j < allCta.length; j++) {
                    allCta[j].setAttribute("tabindex", "-1");
                    allCta[j].setAttribute("aria-hidden", "true");
                }
            }

            for(let i = 0; i < activeSlideCta.length; i++) {
                activeSlideCta[i].setAttribute("tabindex", "0");
                activeSlideCta[i].setAttribute("aria-hidden", "false");
            }
        }

        clickToSlide();
        mobileFocusEnter();
        deviceCheckFocus();

        sw_carousel.on("slideChange", () => { progressActive(); skinColor(); });
        sw_carousel.on("transitionEnd", ctaFocus);
    }

    activeItem(){
    }

    onBreakPointChange(){
    }

    bindEvents(){
    }
}