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
        kick.play();
    }
})


document.addEventListener("keydown", event => {
    if (event.keyCode === 76) {
        snare.play();
    }
})



document.addEventListener("keydown", event => {
    if (event.keyCode === 67) {
        hi_hat_closed.play();
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 68) {
        hi_hat_open.play();
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 69) {
        ride.play();
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 75) {
        tom.play();
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 89) {
        clap.play();
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 84) {
        tink.play();
    }
})

document.addEventListener("keydown", event => {
    if (event.keyCode === 32) {
        boom.play();
    }
})