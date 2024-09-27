console.log("page loaded...");

function playVideo(secondaryVideo){
    video.play();
    var mainVideo = document.getElementById("mainVideo");
    var videoTitle = secondaryVideo.parentElement.querySeletor(".video-title");
    var principalTitle = document.getElementById("title-principal");

    var tempVideoSrc = mainVideo.src;
    var temptitle = principalTitle.textContent;
    
    mainVideo.src = secondaryVideo.src;
    mainVideo.play();

    secondaryVideo.src = tempVideoSrc;

    principalTitle.textContent = videoTitle;
    secondaryVideo.parentElement.querySeletor(".video-title").textContent = temptitle;
}

function pauseVideo(secondaryVideo){
    var mainVideo = document.getElementById("mainVideo")

    var tempSrc = secondaryVideo.src;

    secondaryVideo.src = mainVideo.src;
    mainVideo.src = tempSrc;
    mainVideo.play();
}




