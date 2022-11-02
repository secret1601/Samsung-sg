import { Carousel } from "./component/carousel.js";
import { Teaser } from "./component/teaser.js";
import { Feature } from "./component/feature.js";

window.onload = function() {
    let carousel, teaser, feature;

    carousel = new Carousel;
    teaser = new Teaser;
    feature = new Feature;

    carousel.init();
    teaser.init();
    feature.init();
}