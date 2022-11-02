export class Carousel {
    init(){
        let sw_carousel = new Swiper('.sw-carousel', {
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
    
        // pc, mobile 프로그래스바 클릭 시, active !
        const homeKvCarousel = document.querySelector(".home-kv-carousel").querySelectorAll(".swiper-slide");
        const progressItem = document.querySelectorAll('.indicator__progress-item');
        const progressList = document.querySelector('.indicator__progress-list');
        const productLine = document.querySelectorAll('.indicator__product-line');
        const productName = document.querySelectorAll('.indicator__product-name');
        const play = document.querySelectorAll(".play")[0];
        // 스와이퍼 slides DOM 찾기
        const slides = sw_carousel.slides;
        let windowWidth = window.innerWidth;
        
        const skinColor = {
            "pc-line-black" : 'line-background-black-pc',
            "pc-bg-black" : 'line-color-black-pc',
            "pc-active-black" : 'pc-progress-active-black',
            "bg-white" :'background-white-active'
        }

        let slideProgressData, ctaInActive, ctaActive;
        
        // pc, mobile 페이지네이션 클릭 시 슬라이드 이동
        for (let i = 0; i < progressItem.length; i++) {
            progressItem[i].addEventListener('click', function () {
                sw_carousel.slideTo(i + 1, 1000, false);
            });
        }
        
        // realIndex 활용하여 스와이퍼에 따른 pc, mobile 프로그래스바 index 연동
        function swiperActive(){
            homeTabFocus();
            for(let k = 0; k < progressItem.length; k++) {
                for(let l = 0; l < progressItem.length; l++) {
                    progressItem[l].querySelector(".indicator__product-line").classList.remove("pc-progress-active");
                    productName[l].classList.remove("pc-product-name-active");
                }
                progressItem[sw_carousel.realIndex].querySelector(".indicator__product-line").classList.add("pc-progress-active");
                productName[sw_carousel.realIndex].classList.add("pc-product-name-active");
            }
            // data-progress-color 값 받아옴.
            slideProgressData = slides[sw_carousel.realIndex].getAttribute("data-skin-color");
            this.skin = slideProgressData;
            (this.skin == "black") ? setColorBlack() : setColorWhite();
        }
    
        function setColorBlack() {
            for(let i = 0; i < progressItem.length; i++) {
                productLine[i].classList.add(skinColor["pc-line-black"]);
                productName[i].classList.add(skinColor["pc-bg-black"]);
                productLine[sw_carousel.realIndex].classList.add(skinColor["pc-active-black"]);
                progressList.classList.add(skinColor["bg-white"]);
                play.setAttribute("fill", "#000000")
            }    
        }
        
        function setColorWhite() {
            for(let j = 0; j < progressItem.length; j++) {
                productLine[j].classList.remove(skinColor["pc-line-black"]);
                productName[j].classList.remove(skinColor["pc-bg-black"]);
                productLine[j].classList.remove(skinColor["pc-active-black"]);
                progressList.classList.remove(skinColor["bg-white"]);
                play.setAttribute("fill", "#ffffff")
            }
        }
    
        function homeTabFocus() {
            for(let i = 0; i < homeKvCarousel.length; i++){
                let bool = homeKvCarousel[i].classList.contains("swiper-slide-active");
                if(bool){
                    ctaInActive = homeKvCarousel[i].querySelectorAll("#cta");
                    for(let j = 0; j <ctaInActive.length; j++){
                        ctaInActive[j].setAttribute("tabindex", "-1");
                        ctaInActive[j].setAttribute("aria-hidden", "true");
                    }
                    ctaActive = homeKvCarousel[sw_carousel.realIndex + 1].querySelectorAll("#cta");
                    for(let j = 0; j <ctaActive.length; j++){
                        ctaActive[j].setAttribute("tabindex", "0");
                        ctaActive[j].setAttribute("aria-hidden", "false");
                    }
                }
            }
        };

        function dotFocusTrue() {
            for(let i = 0; i < productLine.length; i++) {
                productLine[i].setAttribute("tabindex", "0");
                productLine[i].setAttribute("aria-hidden", "false");

                productLine[i].addEventListener("keypress", function(e){
                    (e.key == "Enter" ) ?  sw_carousel.slideTo(i+1, 300, false) : '';
                });
            }
        }

        function dotFocusFalse() {
            for(let i = 0; i < productLine.length; i++) {
                productLine[i].setAttribute("tabindex", "-1");
                productLine[i].setAttribute("aria-hidden", "true");
            }
        }

        (windowWidth < 768) ? dotFocusTrue() : dotFocusFalse();
        window.addEventListener("resize", function(){
            windowWidth = window.innerWidth;
            (windowWidth < 768) ? dotFocusTrue() : dotFocusFalse();
        });
    
        sw_carousel.on("slideChange", swiperActive);
    }
}