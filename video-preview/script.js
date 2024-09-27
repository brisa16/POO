console.log("page loaded...");

function playVideo(secondaryVideo){
    video.play();
    var mainVideo = document.getElementById("mainVideo");

    var tempVideoSrc = mainVideo.src;
    
    mainVideo.src = secondaryVideo.src;
    mainVideo.play();

    secondaryVideo.src = tempVideoSrc;
}

function pauseVideo(secondaryVideo){
    var mainVideo = document.getElementById("mainVideo")

    var tempSrc = secondaryVideo.src;

    secondaryVideo.src = mainVideo.src;
    mainVideo.src = tempSrc;
    mainVideo.play();
}




