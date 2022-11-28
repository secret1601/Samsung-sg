export class Etc {
    constructor(){
        this.init();
    }
    init(){
        const scrollTop = document.querySelector(".scroll-top");
        const chatClose = document.querySelector(".chat-close");
        const chat = document.querySelector(".chat");
        let lastScrollY = 0;

        function ChatcloseFn(){
            chat.style.display = "none";
        }
        
        function scrollY(){
            const scrollY = window.scrollY;
            if(scrollY > lastScrollY) {
                scrollTop.classList.remove("scroll-open");
            } else {
                scrollTop.classList.add("scroll-open");
                if(scrollY === 0 ) {
                    scrollTop.classList.remove("scroll-open");
                }
            }
            lastScrollY = scrollY;
        }

        scrollTop.addEventListener("click", () => {
            window.scrollTo({
                top:0, 
                left:0, 
                behavior:'smooth'
            });
        });

        window.addEventListener("scroll", scrollY);
        chatClose.addEventListener("click", ChatcloseFn);
        
    }
}