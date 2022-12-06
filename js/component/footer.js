export class Footer {
    constructor() {
        this.init();
    }
    init() {
        const footerSubmenu = document.querySelectorAll(".footer-submenu");
        
        const subemenuArrow = document.querySelectorAll(".submenu__arrow");
        let windowWidth;

        for(let i = 0; i < footerSubmenu.length; i++){
            subemenuArrow[i].addEventListener("click", (e) => {
                e.preventDefault();
                windowWidth =  window.innerWidth;
                if(windowWidth < 768) {
                    toggleSeleted(i);
                }
            });
        }

        function toggleSeleted(index) {
            footerSubmenu[index].classList.toggle("selected");
        }
    }
}