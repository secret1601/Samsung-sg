export class Feature {
    constructor() {
        this.init();
    }
    init() {
        // 셀렉터
        console.log(this.name)
        const section = document.querySelector(".key-feature-tab");
        const tabItem = document.querySelectorAll(".key-feature-tab__item");
        const tabLine = document.querySelectorAll(".line");
        const featureSlide = document.querySelector(".sw-feature").querySelectorAll(".swiper-slide");

        // 초기화
        let ctaInActive, ctaActive, skin;
        let sw_feature = new Swiper('.sw-feature', {effect: "slide", loop: false, parallax: true,});
        const slides = sw_feature.slides;
        
        // bindEvents
        for(let i = 0; i < tabItem.length; i++){
            tabItem[i].addEventListener("click", function(){
                sw_feature.slideTo(i, 300)

                for(let j = 0; j < tabLine.length; j++) {
                    tabLine[j].classList.remove("line-active")
                }
                tabLine[i].classList.add("line-active");
            });
        }



        function sectionSkin() {
            skin = slides[sw_feature.realIndex].getAttribute("data-skin-color");
            ( skin == "white") ? section.classList.add("key-feature-tab--white") : section.classList.remove("key-feature-tab--white") ;
        }

        function tabLineFn(){
            for(let i = 0; i < tabLine.length; i++) {
                tabLine[i].classList.remove("line-active");
            }
            tabLine[sw_feature.realIndex].classList.add("line-active");
        };

        function featureTabFocus() {
            for(let i = 0; i < featureSlide.length; i++){
                ctaInActive = featureSlide[i].querySelectorAll("#cta");
                for(let j = 0; j < ctaInActive.length; j++) {
                    ctaInActive[j].setAttribute("tabindex", "-1");
                    ctaInActive[j].setAttribute("aria-hidden", "true");
                }
            }
            ctaActive = featureSlide[sw_feature.realIndex].querySelectorAll("#cta");
            for(let j = 0; j < ctaInActive.length; j++) {
                ctaActive[j].setAttribute("tabindex", "0");
                ctaActive[j].setAttribute("aria-hidden", "false");
            }
        }

        function scrollX(){
            const slider = document.getElementById("scroll");
            let startX, scrollLeft, isDown = false;
            slider.addEventListener('mousedown', e => {
                isDown = true;
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            
            slider.addEventListener('mouseleave', () => {
                isDown = false;
            });
            
            slider.addEventListener('mouseup', () => {
                isDown = false;
            });
            
            slider.addEventListener('mousemove', e => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = x - startX;
                slider.scrollLeft = scrollLeft - walk;
            });
        }

        scrollX();
        sectionSkin();

        sw_feature.on("slideChange", function(){
            sectionSkin();
            tabLineFn();
            featureTabFocus();
        });
    }
}