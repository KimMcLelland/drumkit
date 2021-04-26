const kick = document.getElementById("kick");
const snare = document.getElementById("snare");
const hi_hat_open = document.getElementById("hat_open");
const hi_hat_closed = document.getElementById("hat_closed");
const ride = document.getElementById("cymbal");
const tom = document.getElementById("tom");
const boom = document.getElementById("boom");
const tink = document.getElementById("tink");
const clap = document.getElementById("clap");

document.addEventListener("keydown", event => {
    if (event.keyCode === 188) {
        document.getElementById("display_play").innerHTML = "";
        kick.play();
        let display_text = document.createTextNode("kick");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})


document.addEventListener("keydown", event => {
    if (event.keyCode === 76) {
        document.getElementById("display_play").innerHTML = "";
        snare.play();
        let display_text = document.createTextNode("snare");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})



document.addEventListener("keydown", event => {
    if (event.keyCode === 67) {
        document.getElementById("display_play").innerHTML = "";
        hi_hat_closed.play();
        let display_text = document.createTextNode("hi");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 68) {
        document.getElementById("display_play").innerHTML = "";
        hi_hat_open.play();
        let display_text = document.createTextNode("hat");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 69) {
        document.getElementById("display_play").innerHTML = "";
        ride.play();
        let display_text = document.createTextNode("ride");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 75) {
        document.getElementById("display_play").innerHTML = "";
        tom.play();
        let display_text = document.createTextNode("tom");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 89) {
        document.getElementById("display_play").innerHTML = "";
        clap.play();
        let display_text = document.createTextNode("clap");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 84) {
        document.getElementById("display_play").innerHTML = "";
        tink.play();
        let display_text = document.createTextNode("tink");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 32) {
        document.getElementById("display_play").innerHTML = "";
        boom.play();
        let display_text = document.createTextNode("boom");
    let display = document.getElementById("display_play");
    display.appendChild(display_text);
    }
})