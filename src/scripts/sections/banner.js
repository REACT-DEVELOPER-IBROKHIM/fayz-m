const video = document.querySelector("#banner video");
const videoController = document.querySelector("#video-controller");

videoController.addEventListener("click", () => {
    video.muted = !video.muted 
    videoController.setAttribute("data-video-muted", video.muted);
})
