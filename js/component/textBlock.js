export class TextBlock {
    constructor(){
        this.init();
    }
    init(){
        const textInput = document.querySelector(".text-block__input");
        const textSearch = document.querySelector(".text-block__search");
        const textClose = document.querySelector(".text-close");

        textInput.addEventListener("keyup", (e) => {
            if(!!e.target.value) {
                addDeleteClass();
            } else {
                removeDeleteClass();
            }
        });

        textClose.addEventListener("click", (e) => {
            e.preventDefault();
            inputReset();
            removeDeleteClass();
        });

        function removeDeleteClass() {
            textSearch.classList.remove("delete");
        }
        function addDeleteClass() {
            textSearch.classList.add("delete");
        }
        function inputReset() {
            textInput.value = null;
        }

        
    }
}