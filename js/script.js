import { Header } from "./component/header.js";
import { Carousel } from "./component/carousel.js";
import { Teaser } from "./component/teaser.js";
import { Feature } from "./component/feature.js";

window.onload = function() {
    let carousel, teaser, feature, header;

    header = new Header;
    carousel = new Carousel;
    teaser = new Teaser;
    feature = new Feature;
    
}