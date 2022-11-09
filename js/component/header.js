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
        const searchModalClose = document.querySelector(".search-modal__close");
        const searchModal = document.querySelector(".search-modal");
        const search = document.querySelector(".search");

        let activeContentsItem;
        
        list.forEach((v,i) => {
            v.addEventListener("mouseover", function(){
                if(v.getAttribute("data-contents")) {
                    v.classList.add("active");
                    addBackground();
                }
            });

            v.addEventListener("mouseleave", function(){
                if(v.getAttribute("data-contents")) {
                    v.classList.remove("active");
                    removeBackground();
                    
                    activeContentsItem = v.querySelectorAll(".contents-item");
                    removeSelected(activeContentsItem);
                    activeContentsItem[0].classList.add("selected");
                }
            });
        });

        // search
        searchModalClose.addEventListener("click", () => {
            searchClose();
            yVisible();
        });
        search.addEventListener("click", () => {
            searchOpen();
            yHidden();
        });

        function yHidden() {
            body.style.overflowY = "hidden";
        }

        function yVisible() {
            body.style.overflowY = "visible";
        }

        function searchOpen(){
            searchModal.classList.add("open");
        }

        function searchClose() {
            searchModal.classList.remove("open");
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
                        if(list[i].getAttribute("data-contents")) {
                            list[i].classList.add("active");
                            addBackground();
                        }
                    }
                });
            }
        }

        itemMove();
        closeClick();
        itemFocusMove();
        gnbFocusMove();
    }
}