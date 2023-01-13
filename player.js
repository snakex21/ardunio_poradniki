var myVideo = document.getElementById("my-video");

function playPause() {
  if (myVideo.paused)
    myVideo.play();
  else
    myVideo.pause();
}

myVideo.addEventListener("click", playPause);
