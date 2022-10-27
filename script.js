console.log("Welcome to Spotify..");
// initiallize variables
let songIndex = 0;
let audioElement = new Audio("songs/1.mp3");

let masterPlay = document.getElementById("masterPlay");

let myProgressBar = document.getElementById("myProgressBar");

let gif = document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));

let defaultVolume = 0.5;
let volumeBar = document.getElementById("myVolumeBar");
volumeBar.value = defaultVolume * 100;

let masterSongName = document.getElementById("masterSongName");
let songs = [
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/1.mp3",
    coverPath: "covers/1.jpg",
  },
  {
    songName: "salam-e-ishq",
    filePath: "songs/2.mp3",
    coverPath: "covers/2.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/3.mp3",
    coverPath: "covers/3.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/4.mp3",
    coverPath: "covers/4.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/5.mp3",
    coverPath: "covers/5.jpg",
  },

  {
    songName: "SalamIshq",
    filePath: "songs/6.mp3",
    coverPath: "covers/6.jpg",
  },

  {
    songName: "Salam-e-Ishq",
    filePath: "songs/7.mp3",
    coverPath: "covers/7.jpg",
  },

  {
    songName: "Salam-e-Ishq",
    filePath: "songs/8.mp3",
    coverPath: "covers/8.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/9.mp3",
    coverPath: "covers/9.jpg",
  },
  {
    songName: "Salam-e-Ishq",
    filePath: "songs/10.mp3",
    coverPath: "covers/10.jpg",
  },
];
// let arr = ["songs", "shwejan"];
// console.log(typeof arr);
songItem.forEach((element, i) => {
  // console.log(element, i);
  element.getElementsByTagName("img")[0].src = songs[i].coverPath;
  element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});
// handle play/pause

masterPlay.addEventListener("click", () => {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    masterPlay.classList.remove("fa-play-circle");
    masterPlay.classList.add("fa-pause-circle");
    gif.style.opacity = 1;
  } else {
    audioElement.pause();
    masterPlay.classList.remove("fa-pause-circle");
    masterPlay.classList.add("fa-play-circle");
    gif.style.opacity = 0;
  }
});
//listen to events
audioElement.addEventListener("timeupdate", () => {
  progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);

  myProgressBar.value = progress;
});

myProgressBar.addEventListener("change", () => {
  audioElement.currentTime =
    (myProgressBar.value * audioElement.duration) / 100;
});

const makeAllPlay = () => {
  Array.from(document.getElementsByClassName("songItemPlay")).forEach(
    (element) => {
      element.classList.remove("fa-pause-circle");
      element.classList.add("fa-play-circle");
    }
  );
};

Array.from(document.getElementsByClassName("songItemPlay")).forEach(
  (element) => {
    element.addEventListener("click", (e) => {
      console.log(e.target);
      makeAllPlay();
      songIndex = parseInt(e.target.id);
      e.target.classList.remove("fa-play-circle");
      e.target.classList.add("fa-pause-circle");
      audioElement.src = `songs/${songIndex + 1}.mp3`;
      masterSongName.innerText = songs[songIndex].songName;
      audioElement.currentTime = 0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove("fa-play-circle");
      masterPlay.classList.add("fa-pause-circle");
    });
  }
);

document.getElementById("next").addEventListener("click", () => {
  if (songIndex >= 9) {
    songIndex = 0;
  } else {
    songIndex++;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

document.getElementById("previous").addEventListener("click", () => {
  if (songIndex <= 0) {
    songIndex = 9;
  } else {
    songIndex--;
  }
  audioElement.src = `songs/${songIndex + 1}.mp3`;
  masterSongName.innerText = songs[songIndex].songName;
  audioElement.currentTime = 0;
  audioElement.play();
  masterPlay.classList.remove("fa-play-circle");
  masterPlay.classList.add("fa-pause-circle");
});

volumeBar.addEventListener("change", () => {
  defaultVolume = volumeBar.value;
  // console.log(defaultVolume);
  audioElement.volume = defaultVolume / 100;
});
