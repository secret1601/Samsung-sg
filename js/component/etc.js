export class Etc {
    constructor(){
        this.init();
    }
    init(){
        const textContents = document.querySelector(".text-contents");
        const contentsClose = document.querySelector(".text-contents__close");

        const scrollTop = document.querySelector(".scroll-top");
        const chatClose = document.querySelector(".chat-close");
        const chat = document.querySelector(".chat");
        let lastScrollY = 0;

        scrollTop.addEventListener("click", scrollSmooth);
        window.addEventListener("scroll", scrollY);
        chatClose.addEventListener("click", ChatcloseFn);
        contentsClose.addEventListener("click", contentsNone);

        function contentsNone() {
            textContents.style.display = "none";
        }

        function ChatcloseFn(){
            chat.style.display = "none";
        }
        function removeScroll() {
            scrollTop.classList.remove("scroll-open");
        }
        function addScroll() {
            scrollTop.classList.add("scroll-open");
        }

        function scrollSmooth() {
            window.scrollTo({
                top:0, 
                left:0, 
                behavior:'smooth'
            });
        }
        
        function scrollY(){
            const scrollY = window.scrollY;
            if(scrollY > lastScrollY) {
                removeScroll();
            } else {
                addScroll();
                if(scrollY === 0 ) {
                    removeScroll();
                }
            }
            lastScrollY = scrollY;
        }
    }
}