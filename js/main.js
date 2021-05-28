function returnTo() {
    window.history.go(-1);
}
function select() {
let audio = new Audio();
audio.volume = "1.0";
audio.src = "./sounds/select.mp3";
audio.play();
}