
const playVideo = function () {
  const videoPlayer = document.querySelector(".video-player__container");
  const video = videoPlayer.querySelector(".video-player__video");
  const  playButton = videoPlayer.querySelector(".video-player__play");
  const previewer = videoPlayer.querySelector("picture");

  playButton.addEventListener('click', (evt) =>{
    evt.preventDefault;
    video.style.display = "block";
    videoPlayer.querySelector(".video-player__control").style.display = "none";
    previewer.style.display = "none";
  });
};

 export default playVideo;
