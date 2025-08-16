let songs = [
  { name: "Song 1", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" },
  { name: "Song 2", file: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" }
];

let currentIndex = 0;
let audio = new Audio(songs[currentIndex].file);
let isPlaying = false;

function playSong(index) {
  currentIndex = index;
  audio.src = songs[currentIndex].file;
  audio.play();
  isPlaying = true;
  document.getElementById("currentSong").innerText = "Playing: " + songs[currentIndex].name;
  document.getElementById("playPause").innerText = "⏸";
}

function togglePlay() {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
    document.getElementById("playPause").innerText = "▶";
  } else {
    audio.play();
    isPlaying = true;
    document.getElementById("playPause").innerText = "⏸";
  }
}

function prevSong() {
  currentIndex = (currentIndex - 1 + songs.length) % songs.length;
  playSong(currentIndex);
}

function nextSong() {
  currentIndex = (currentIndex + 1) % songs.length;
  playSong(currentIndex);
}

let progressBar = document.getElementById("progressBar");
audio.addEventListener("timeupdate", () => {
  progressBar.value = (audio.currentTime / audio.duration) * 100;
});
progressBar.addEventListener("input", () => {
  audio.currentTime = (progressBar.value / 100) * audio.duration;
});