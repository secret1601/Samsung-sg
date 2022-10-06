
const video = document.getElementById("video");
const toggle = document.getElementById("video-toggle");

function togglePlay() {
    const method = video.paused? 'play': 'pause';
    video[method]();
}

function updateButton() {
    const icon = video.paused? '►': '❚❚';
    toggle.textContent = icon;
}

video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);

toggle.addEventListener('click', togglePlay);


window.addEventListener("resize", function(){

    // 비디오 src 변경
    let cw = document.documentElement.clientWidth;
    let videoChange = document.querySelectorAll("source");

    if(cw <= 767) {
        videoChange[1].setAttribute("src", 'https://images.samsung.com/is/content/samsung/assets/sg/home/Home_Q4_KV_Main-KV_720x1080_mo.mp4')
    }
    else {
        videoChange[1].setAttribute("src", 'https://images.samsung.com/is/content/samsung/assets/sg/home/Home_Q4_KV_Main-KV_1440x640_pc.mp4')
    }
});

