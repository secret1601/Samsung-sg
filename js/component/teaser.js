export class Teaser {
    constructor() {
        this.init();
    }
    init() {
        // Half Teaser List
        let sw_teaser = new Swiper('.sw-teaser-1', {
            breakpoints: {
                767: {
                    effect: 'creative',
                    loop: false,
                    speed: 300,
                    touchRatio: 0,
                }
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
                type: 'bullets'
            },
            loop: false,
            a11y : false
        });
        
        const contentItem = document.querySelectorAll(".half-teaser-list__visual-content-item");
        const contentCta = document.querySelectorAll(".half-teaser-list__visual-content-item .cta");
        const paginationItem = document.querySelectorAll(".pagination-item");
        const halfTeaserList = document.querySelector(".half-teaser-list__visual").querySelectorAll(".swiper-slide");
        const visualImg = document.querySelector(".half-teaser-list__visual-img").querySelectorAll("#teaser-img");

        const teaserActive = {
            item :'item--active'
        }
        
        let ctaInActive, ctaActive ;
        let windowWidth = window.innerWidth;

        function imgFocusActive(){
            for(let i = 0; i < visualImg.length; i++) {
                visualImg[i].addEventListener("focus", function(){
                    sw_teaser.slideTo(i, 0, false);

                    for(let j = 0; j < contentItem.length; j++) {
                        contentItem[j].classList.remove(teaserActive.item);
                    }
                    contentItem[i].classList.add(teaserActive.item);
                });
            }
        };
        
        function teaserEnter(){
            for(let i = 0; i < contentItem.length; i++) {
                contentItem[i].addEventListener("mouseenter", function(){
                    sw_teaser.slideTo(i, 0, false);
        
                    for(let j = 0; j < contentItem.length; j++) {
                        contentItem[j].classList.remove(teaserActive.item);
                    }
                    contentItem[i].classList.add(teaserActive.item);
                });
            }
        }

        function teaserFocus(){
            for(let i = 0; i < contentCta.length; i++) {
                contentCta[i].addEventListener("focus", function(){
                    sw_teaser.slideTo(i, 0, false);
                    visualImg[i].setAttribute("tabindex", "0");
        
                    for(let j = 0; j < contentCta.length; j++) {
                        contentItem[j].classList.remove(teaserActive.item);
                    }
                    contentItem[i].classList.add(teaserActive.item);
                });
            }
        }

        function clickToSlide(){
            for(let i = 0; i < paginationItem.length; i++) {
                paginationItem[i].addEventListener("click", function(){
                    sw_teaser.slideTo(i, 350, false)
                });
            }
        }
        

        function teaserTabFocus() {
            for(let i = 0; i < halfTeaserList.length; i++) {
                ctaInActive = halfTeaserList[i].querySelectorAll("#cta");
                ctaInActive[0].setAttribute("tabindex", "-1");
                ctaInActive[0].setAttribute("aria-hidden", "true");
            }
            ctaActive = halfTeaserList[sw_teaser.realIndex].querySelectorAll("#cta");
            ctaActive[0].setAttribute("tabindex", "0");
            ctaActive[0].setAttribute("aria-hidden", "false");
        }

        function pagination() {
            for(let i = 0; i < paginationItem.length; i++) {
                paginationItem[i].classList.remove("pagination-item--active");
                paginationItem[sw_teaser.realIndex].classList.add("pagination-item--active");
            }
        }

        function mobileFocus(){
            for(let i = 0; i < visualImg.length; i++) {
                for(let j = 0; j < visualImg.length; j++) {
                    visualImg[j].setAttribute("tabindex", "-1");
                    visualImg[j].setAttribute("aria-hidden", "true");
                    contentCta[j].setAttribute("tabindex", "-1");
                    contentCta[j].setAttribute("aria-hidden", "true");
                }
                visualImg[sw_teaser.realIndex].setAttribute("tabindex", "0");
                visualImg[sw_teaser.realIndex].setAttribute("aria-hidden", "false");
                contentCta[sw_teaser.realIndex].setAttribute("tabindex", "0");
                contentCta[sw_teaser.realIndex].setAttribute("aria-hidden", "false");
            }
        }

        function pcFocus(){
            for(let i = 0; i < visualImg.length; i++) {
                visualImg[i].setAttribute("tabindex", "0");
                visualImg[i].setAttribute("aria-hidden", "false");
                contentCta[i].setAttribute("tabindex", "0");
                contentCta[i].setAttribute("aria-hidden", "false");
            }
        }

        function mobilePcFocus() {
            (windowWidth < 768) ? mobileFocus() : pcFocus();
            window.addEventListener("resize", function(){
                windowWidth = window.innerWidth;
                (windowWidth < 768) ? mobileFocus() : pcFocus();
            });
        }
        
        mobilePcFocus();
        clickToSlide();
        imgFocusActive();
        teaserFocus();
        teaserEnter();

        sw_teaser.on("slideChange", function(){
            mobilePcFocus();
            teaserTabFocus();
            pagination();
        });
    }
}
