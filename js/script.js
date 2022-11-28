import { Header } from "./component/header.js";
import { Carousel } from "./component/carousel.js";
import { Teaser } from "./component/teaser.js";
import { Feature } from "./component/feature.js";
import { Footer } from "./component/footer.js";
import { Etc } from "./component/etc.js";

window.onload = function() {
    let  header, carousel, teaser, feature, footer, etc;

    header = new Header;
    carousel = new Carousel;
    teaser = new Teaser;
    feature = new Feature;
    footer = new Footer;
    etc = new Etc;
    
}