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
    const productLine = document.querySelectorAll('.indicator__product-line');
    const productName = document.querySelectorAll('.indicator__product-name');
    const dotItem = document.querySelectorAll('.indicator__dot-item');
    const dotList = document.querySelector('.indicator__dot-list');
    // pc, mobile 페이지네이션 클릭 시 슬라이드 이동
    for (let i = 0; i < progressItem.length; i++) {
        progressItem[i].addEventListener('click', function () {
            sw_carousel.slideTo(i + 1, 1000, false);
        });
        dotItem[i].addEventListener('click', function () {
            sw_carousel.slideTo(i + 1, 1000, false);
        });
    }
    // realIndex 활용하여 스와이퍼에 따른 pc, mobile 프로그래스바 index 연동
    // realIndex를 항상 감시하는 방법 찾아서 리팩토링...
    // 플레이 버튼 색상 변경
    const play = document.querySelectorAll(".play")[0];
    let wrap = document.querySelector(".wrap");

    function swiperActive(){
        for(let k = 0; k < progressItem.length; k++) {
            for(let l = 0; l < progressItem.length; l++) {
                progressItem[l].querySelector(".indicator__product-line").classList.remove("pc-progress-active");
                dotItem[l].classList.remove("mo-dot-active");
                productName[l].classList.remove("pc-product-name-active");
            }
            progressItem[sw_carousel.realIndex].querySelector(".indicator__product-line").classList.add("pc-progress-active");
            dotItem[sw_carousel.realIndex].classList.add("mo-dot-active");
            productName[sw_carousel.realIndex].classList.add("pc-product-name-active");

            // realIndex 가 1일 때, 스타일 반전 
            if(sw_carousel.realIndex == 1) {
                productLine[k].classList.add("line-background-black-pc");
                productName[k].classList.add("line-color-black-pc");
                productLine[sw_carousel.realIndex].classList.add("pc-progress-active-black");
                play.setAttribute("fill", "#000000")

                dotList.classList.add("dot-background-black-mo");
                dotItem[k].classList.add("dot-color-black-mo");
                dotItem[sw_carousel.realIndex].classList.add("mo-dot-active-black");

            } else {
                productLine[k].classList.remove("line-background-black-pc");
                productName[k].classList.remove("line-color-black-pc");
                productLine[1].classList.remove("pc-progress-active-black");
                play.setAttribute("fill", "#ffffff")

                dotList.classList.remove("dot-background-black-mo");
                dotItem[k].classList.remove("dot-color-black-mo");
                dotItem[k].classList.remove("mo-dot-active-black");

            }
        }
    }

    // Swiper 속성에서 slideChange는 활성화된 슬라이드 (swiper-slide-active) 가 바뀔 때 마다 함수를 실행한다.
    sw_carousel.on("slideChange", swiperActive);

    // function realIndexEvent(event){
    //     wrap.addEventListener(event, function(){
    //         for(let k = 0; k < progressItem.length; k++) {
    //             for(let l = 0; l < progressItem.length; l++) {
    //                 progressItem[l].querySelector(".indicator__product-line").classList.remove("pc-progress-active");
    //                 dotItem[l].classList.remove("mo-dot-active");
    //                 productName[l].classList.remove("pc-product-name-active");
    //             }
    //             progressItem[sw_carousel.realIndex].querySelector(".indicator__product-line").classList.add("pc-progress-active");
    //             dotItem[sw_carousel.realIndex].classList.add("mo-dot-active");
    //             productName[sw_carousel.realIndex].classList.add("pc-product-name-active");

    //             // realIndex 가 1일 때, 스타일 반전 
    //             if(sw_carousel.realIndex == 1) {
    //                 productLine[k].classList.add("line-background-black-pc");
    //                 productName[k].classList.add("line-color-black-pc");
    //                 productLine[sw_carousel.realIndex].classList.add("pc-progress-active-black");
    //                 attr.setAttribute("fill", "#000000")

    //                 dotList.classList.add("dot-background-black-mo");
    //                 dotItem[k].classList.add("dot-color-black-mo");
    //                 dotItem[sw_carousel.realIndex].classList.add("mo-dot-active-black");

    //             } else {
    //                 productLine[k].classList.remove("line-background-black-pc");
    //                 productName[k].classList.remove("line-color-black-pc");
    //                 productLine[1].classList.remove("pc-progress-active-black");
    //                 attr.setAttribute("fill", "#ffffff")

    //                 dotList.classList.remove("dot-background-black-mo");
    //                 dotItem[k].classList.remove("dot-color-black-mo");
    //                 dotItem[k].classList.remove("mo-dot-active-black");

    //             }
    //         }
    //     })
    // }

    // realIndexEvent("click");
    // realIndexEvent("mousemove");

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
