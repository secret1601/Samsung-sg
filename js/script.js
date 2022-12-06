import { Header } from "./component/header.js";
import { Carousel } from "./component/carousel.js";
import { Teaser } from "./component/teaser.js";
import { Feature } from "./component/feature.js";
import { Footer } from "./component/footer.js";
import { TextBlock } from "./component/textBlock.js";
import { Etc } from "./component/etc.js";

window.onload = function() {
    let  header, carousel, teaser, feature, footer, etc, textBlock;
    
    new Header;
    new Carousel;
    new Teaser;
    new Feature;
    new Footer;
    new TextBlock;
    new Etc;
}
