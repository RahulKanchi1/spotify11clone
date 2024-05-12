console.log("Welcome to Spotify");

let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Hukkum - The Jailer", filePath: "1.mp3", coverPath: "1.jpeg"},
    {songName: "Jalasa", filePath: "2.mp3", coverPath: "2.jpg"},
    {songName: 'eyy bida nee adia ', filePath: "3.mp3", coverPath: "3.jpeg"},
    {songName: "swamy swamy - puspha", filePath: "4.mp3", coverPath: "4.jpeg"},
    {songName: " dako dako meka - puspha", filePath: "5.mp3", coverPath: "5.jpeg"},
    {songName: 'oh sita ', filePath: "6.mp3", coverPath: "6.jpeg"},
    {songName: "Nattu Nattu ", filePath: "7.mp3", coverPath: "7.jpeg"},
    {songName: "Kurchi madathapeti ", filePath: "8.mp3", coverPath: "8.jpeg"},
    {songName: "kumuram bheemo", filePath: "9.mp3", coverPath: "9.jpeg"},
    {songName: "janambhumi", filePath: "10.mp3", coverPath: "10.jpeg"},
];

// Function to play song
const playSong = () => {
    audioElement.src =  songs[songIndex].filePath;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
}

// Event listener for play/pause button
masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <= 0) {
        playSong();
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
    }
});

// Event listener for progress bar
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

// Event listener for next button
document.getElementById('next').addEventListener('click', () => {
    songIndex = (songIndex + 1) % songs.length;
    playSong();
    updateCoverPhoto(songIndex);
});

// Event listener for previous button
document.getElementById('previous').addEventListener('click', () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    playSong();
    updateCoverPhoto(songIndex);
});

// Update progress bar
audioElement.addEventListener('timeupdate', () => {
    const progress = (audioElement.currentTime / audioElement.duration) * 100;
    myProgressBar.value = progress;
});

// Function to update cover photo
const updateCoverPhoto = (songIndex) => {
    const coverPhoto = document.getElementById('songCover');
    coverPhoto.src =  songs[songIndex].coverPath;
}
