import { Carousel } from "../component/carousel.js";
import { Teaser } from "../component/teaser.js";
import { Feature } from "../component/feature.js";

window.onload = function() {
    const body = document.querySelectorAll("body a");
    for(let i = 0; i < body.length; i++) {
        body[i].addEventListener("click", function(e){
            e.preventDefault();
        });
    }

    let carousel, teaser, feature;
    carousel = new Carousel;
    teaser = new Teaser;
    feature = new Feature;

    carousel.init();
    teaser.init();
    feature.init();
}