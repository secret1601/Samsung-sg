export class Header {
    constructor(){
        this.init();
    }
    init(){
        const list = document.querySelectorAll("#list");
        const gnbBackground = document.querySelector(".gnb-background");
        const contentsItem = document.querySelectorAll(".contents-item");
        const contentsClose = document.querySelectorAll(".contents-close");

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

        contentsClose.forEach((v,i) => {
            v.addEventListener("click", function(){
                removeBackground();
                removeActive(list);
            });
        });

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
        
    }
}