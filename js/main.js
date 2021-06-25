function returnTo() {
    window.history.go(-1);
}
/* Variables */

/* index */

/* Over mij */

/* Projecten */

/* Contact */

/* Functions */
function select() {
let audio = new Audio();
audio.volume = "1.0";
audio.src = "./sounds/select.mp3";
audio.play();
}
function themeSwitch() {


    select()
}
    let d = new Date;
    let n = d.getHours()
    console.log(n)
    if (n < 19 || n > 7) {
        document.getElementById("html").style.background = "url(../img/bg-day.png)";
        document.getElementById("html").style.backgroundRepeat = "no-repeat";
        document.getElementById("html").style.backgroundSize = "cover";
    }
    else {
        document.getElementById("html").style.background = "url(../img/bg-night.png)";
        document.getElementById("html").style.backgroundRepeat = "no-repeat";
        document.getElementById("html").style.backgroundSize = "cover";
    }
console.log("File Loaded!")