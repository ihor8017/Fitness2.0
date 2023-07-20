
const playVideo = function () {
  const videoPlayer = document.querySelector(".video-player__container");
  const  playButton = videoPlayer.querySelector(".video-player__play");
  const previewer = videoPlayer.querySelector("picture");
  let source = playButton.getAttribute('href');

  playButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    videoPlayer.querySelector(".video-player__control").style.display = "none";
    const newIframe = document.createElement('iframe');
    newIframe.classList.add("video-player__video");
    newIframe.style.display = "block";
    newIframe.src = source;
    newIframe.title = "YouTube video player";
    newIframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    newIframe.allowFullscreen = true;
    previewer.style.display = "none";
    videoPlayer.appendChild (newIframe);
  });
};

export default playVideo;
