const pianoKeys = document.querySelectorAll(".piano-keys .key"),
volumeSlider = document.querySelector(".volume-slider input"),
keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
audio = new Audio(`tunes/a.wav`);

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`;
    audio.play();
    console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    },150);
}

const handleKeyDown = (event) => {
    const keyPressed = event.key; // Get the key that was pressed
    if (allKeys.includes(keyPressed)) {
        playTune(keyPressed);
    }
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key)
    key.addEventListener("click",() => playTune(key.dataset.key))

});

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));

}

const handleVolume = (e) =>{
    audio.volume = e.target.value;
}

const pressedKey = (e) => {
    if(allKeys.includes(e.key)) playTune(e.key);
}

document.addEventListener("input",handleVolume);
document.addEventListener("keydown", handleKeyDown);
volumeSlider.addEventListener("keydown",pressedKey);
keysCheckbox.addEventListener("click",showHideKeys);