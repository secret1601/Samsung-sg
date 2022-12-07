export class Header {
    constructor(){
        this.init();
    }
    init(){
        const body = document.querySelector("body");
        const list = document.querySelectorAll(".list");
        const gnbBackground = document.querySelector(".gnb-background");
        const contentsItem = document.querySelectorAll(".contents-item");
        const contentsClose = document.querySelectorAll(".contents-close");

        const searchModalCloseMo = document.querySelector(".search-modal__close-mo");
        const searchModalClose = document.querySelector(".search-modal__close");
        const searchModal = document.querySelector(".search-modal");
        const search = document.querySelector(".search");
        
        const basketModaCta = document.querySelector(".basket-modal__cta");
        const basketModalClose = document.querySelector(".basket-modal__close");
        const basketModal = document.querySelector(".basket-modal");
        const basket = document.querySelector(".basket");

        const gnbOpen = document.querySelector(".gnb-menu");
        const gnbClose = document.querySelector(".gnb--close");
        const moBackground = document.querySelector(".mo-background");
        const nav = document.querySelector(".nav");

        let activeContentsItem, domWidth;     

        // search modal
        searchModalCloseMo.addEventListener("click", function(){
            searchClose();
            yVisible();
        });
        searchModalClose.addEventListener("click", () => {
            searchClose();
            yVisible();
        });
        search.addEventListener("click", () => {
            searchOpen();
            yHidden();
        });

        // basket modal
        basket.addEventListener("click", basketOpen);
        basketModalClose.addEventListener("click", basketClose);
        basketModaCta.addEventListener("click", basketClose);

        function yVisible() {
            body.style.overflowY = "visible";
        }

        function yHidden() {
            body.style.overflowY = "hidden";
        }

        function searchOpen(){
            searchModal.classList.add("open");
        }

        function searchClose() {
            searchModal.classList.remove("open");
        }

        function basketOpen(){
            basketModal.classList.add("open");
        }
        function basketClose(){
            basketModal.classList.remove("open");
        }
        function addBackground(){
            gnbBackground.classList.add("open");
        }

        function removeBackground(){
            gnbBackground.classList.remove("open");
        }
        function removeSelected(variable) {
            for(let i = 0; i < variable.length; i++) {
                variable[i].classList.remove("selected");
            }
        }

        function removeActive(variable) {
            for(let i = 0; i < variable.length; i++) {
                variable[i].classList.remove("active");
            }
        }
        function itemMove(){
            for(let i = 0; i < contentsItem.length; i++) {
                contentsItem[i].addEventListener("mouseover", function(){
                    for(let i = 0; i < list.length; i++) {
                        if(list[i].classList.contains("active")) {
                            activeContentsItem = list[i].querySelectorAll(".contents-item");
                            removeSelected(activeContentsItem);
                        }
                    }
                    contentsItem[i].classList.add("selected");
                });
            }
        }
        function closeClick(){
            contentsClose.forEach((v,i) => {
                v.addEventListener("click", function(){
                    removeBackground();
                    removeActive(list);
                });
            });
        }
        function itemFocusMove() {
            for(let i = 0; i < contentsItem.length; i++) {
                contentsItem[i].addEventListener("keydown", function(e){
                    if(e.key === "Enter") {
                        for(let i = 0; i < list.length; i++) {
                            if(list[i].classList.contains("active")) {
                                activeContentsItem = list[i].querySelectorAll(".contents-item");
                                removeSelected(activeContentsItem);
                            }
                        }
                        contentsItem[i].classList.add("selected");
                    }
                });
            }
        }
        function gnbFocusMove() {
            for(let i = 0; i < list.length; i++) {
                list[i].addEventListener("keydown", function(e){
                    if(e.key === "Enter") {
                        removeActive(list);
                        removeBackground();
                        if(list[i].getAttribute("data-contents") === "true") {
                            list[i].classList.add("active");
                            addBackground();
                        }
                    }
                });
            }
        }
        function gnbPc() {
            list.forEach( v => {
                v.addEventListener("mouseover", function(){
                    if(v.getAttribute("data-contents") === "true") {
                        v.classList.add("active");
                        addBackground();
                    }
                });

                v.addEventListener("mouseleave", function(){
                    if(v.getAttribute("data-contents") === "true") {
                        v.classList.remove("active");
                        removeBackground();

                        activeContentsItem = v.querySelectorAll(".contents-item");
                        removeSelected(activeContentsItem);
                        activeContentsItem[0].classList.add("selected");
                    }
                });
            });
        }
        function gnbMobile() {
            list.forEach( v => {
                v.addEventListener("mouseover", function(){
                    if(v.getAttribute("data-contents") === "true") {
                        v.classList.remove("active");
                        removeBackground();
                    }
                });

                v.addEventListener("mouseleave", function(){
                    if(v.getAttribute("data-contents") === "true") {
                        v.classList.remove("active");
                        removeBackground();

                        activeContentsItem = v.querySelectorAll(".contents-item");
                        removeSelected(activeContentsItem);
                        activeContentsItem[0].classList.add("selected");
                    }
                });
            });
        }
        function breakPointGnb() {
            domWidth = window.innerWidth;
            ( domWidth > 1280 ) ? gnbPc() : gnbMobile();
        }
        function resize() {
            window.addEventListener("resize", () => {
                domWidth = window.innerWidth;
                breakPointGnb();
            })
        }

        gnbClose.addEventListener("click", () => {
            nav.classList.remove("move-right");
            moBackground.classList.remove("mo-gnb");
        });
        gnbOpen.addEventListener("click", () => {
            nav.classList.add("move-right");
            moBackground.classList.add("mo-gnb");
        })

        breakPointGnb();
        resize();

        itemMove();
        closeClick();
        itemFocusMove();
        gnbFocusMove();
    }
};