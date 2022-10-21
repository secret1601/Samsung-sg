// 스와이퍼
window.onload = function() {
    let sw_carousel = new Swiper('.sw-carousel', {
        effect: 'fade',
        loop: true,
        speed: 300,
        navigation: {
            prevEl: '.sw-carousel-prev',
            nextEl: '.sw-carousel-next'
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },
    });

    // pc, mobile 프로그래스바 클릭 시, active !
    const progressItem = document.querySelectorAll('.indicator__progress-item')
    const progressList = document.querySelector('.indicator__progress-list');
    const productLine = document.querySelectorAll('.indicator__product-line');
    const productName = document.querySelectorAll('.indicator__product-name');
    const play = document.querySelectorAll(".play")[0];
    // 스와이퍼 slides DOM 찾기
    const slides = sw_carousel.slides;
    
    skinColor = {
        "pc-line-black" : 'line-background-black-pc',
        "pc-bg-black" : 'line-color-black-pc',
        "pc-active-black" : 'pc-progress-active-black',
        "mo-bg-white" :'mobile-pagination-backgorund-white'
    }
    
    // pc, mobile 페이지네이션 클릭 시 슬라이드 이동
    for (let i = 0; i < progressItem.length; i++) {
        progressItem[i].addEventListener('click', function () {
            sw_carousel.slideTo(i + 1, 1000, false);
        });
    }

    // realIndex 활용하여 스와이퍼에 따른 pc, mobile 프로그래스바 index 연동
    function swiperActive(){
        for(let k = 0; k < progressItem.length; k++) {
            for(let l = 0; l < progressItem.length; l++) {
                progressItem[l].querySelector(".indicator__product-line").classList.remove("pc-progress-active");
                productName[l].classList.remove("pc-product-name-active");
            }
            progressItem[sw_carousel.realIndex].querySelector(".indicator__product-line").classList.add("pc-progress-active");
            productName[sw_carousel.realIndex].classList.add("pc-product-name-active");
        }
        // data-progress-color 값 받아옴.
        let slideProgressData = slides[sw_carousel.realIndex].getAttribute("data-skin-color");
        this.skin = slideProgressData;
        (this.skin == "black") ? setColorBlack() : setColorWhite();
    }

    function setColorBlack() {
        for(let i = 0; i < progressItem.length; i++) {
            productLine[i].classList.add(skinColor["pc-line-black"]);
            productName[i].classList.add(skinColor["pc-bg-black"]);
            productLine[sw_carousel.realIndex].classList.add(skinColor["pc-active-black"]);
            progressList.classList.add(skinColor["mo-bg-white"]);

            play.setAttribute("fill", "#000000")
        }    
    }
    
    function setColorWhite() {
        for(let j = 0; j < progressItem.length; j++) {
            productLine[j].classList.remove(skinColor["pc-line-black"]);
            productName[j].classList.remove(skinColor["pc-bg-black"]);
            productLine[j].classList.remove(skinColor["pc-active-black"]);
            progressList.classList.remove(skinColor["mo-bg-white"]);
            
            play.setAttribute("fill", "#ffffff")
        }
    }

    sw_carousel.on("slideChange", swiperActive);

    // Half Teaser List
    let sw_teaser = new Swiper('.sw-teaser', {
        effect: 'creative',
        loop: true,
        speed: 300,
        touchRatio: 0
    });

    const contentItem = document.querySelectorAll(".half-teaser-list__visual-content-item");
    const listButton = document.querySelectorAll(".half-teaser-list__button");
    const listBefore = document.querySelectorAll(".half-teaser-list__before");
    const listAfter = document.querySelectorAll(".half-teaser-list__after");

    teaserActive = {
        button : 'half-teaser-list__button--active',
        before : 'half-teaser-list__before--active',
        after : 'half-teaser-list__after--active',
        item :'half-teaser-list__visual-content-item--active'
    }
    
    for(let i = 0; i < contentItem.length; i++) {
        contentItem[i].addEventListener("mouseenter", function(){
            sw_teaser.slideTo(i + 1, 0, false);

            for(j = 0; j < contentItem.length; j++) {
                listButton[j].classList.remove(teaserActive.button);
                listBefore[j].classList.remove(teaserActive.before);
                listAfter[j].classList.remove(teaserActive.after);
                contentItem[j].classList.remove(teaserActive.item);
            }
            listButton[i].classList.add(teaserActive.button);
            listBefore[i].classList.add(teaserActive.before);
            listAfter[i].classList.add(teaserActive.after);
            contentItem[i].classList.add(teaserActive.item);

            // 마지막 자식 요소의 after 클래스 제거 
            let teaserListAfter = listAfter[sw_teaser.realIndex].getAttribute("data-after");
            (teaserListAfter == "false") ? listAfter[sw_teaser.realIndex].classList.remove(teaserActive.after) : '';
        });
        
    }
    

// ***************************비디오*******************************
// const video = document.getElementById("video");
// const toggle = document.getElementById("video-toggle");

// function togglePlay() {
//     const method = video.paused? 'play': 'pause';
//     video[method]();
// }

// function updateButton() {
//     const icon = video.paused? '►': '❚❚';
//     toggle.textContent = icon;
// }

// video.addEventListener('click', togglePlay);
// video.addEventListener('play', updateButton);
// video.addEventListener('pause', updateButton);

// toggle.addEventListener('click', togglePlay);


// window.addEventListener("resize", function(){

//     // 비디오 src 변경
//     let cw = document.documentElement.clientWidth;
//     let videoChange = document.querySelectorAll("source");

//     if(cw <= 767) {
//         videoChange[1].setAttribute("src", 'https://images.samsung.com/is/content/samsung/assets/sg/home/Home_Q4_KV_Main-KV_720x1080_mo.mp4')
//     }
//     else {
//         videoChange[1].setAttribute("src", 'https://images.samsung.com/is/content/samsung/assets/sg/home/Home_Q4_KV_Main-KV_1440x640_pc.mp4')
//     }
// });
}
