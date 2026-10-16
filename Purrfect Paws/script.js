// ======================================
// CAT AMBIANCE SOUND SYSTEM
// ======================================

// Store the currently playing sound
let currentCatAudio = null;


// Cat sound files
const catSounds = {
    meow: "sound/meow.mp3",
    purr: "sound/purr.mp3",
    hiss: "sound/hiss.mp3",
    chirp: "sound/chirp.mp3",
    kitten: "sound/kitten.mp3"
};


// ======================================
// PLAY CAT SOUND
// ======================================

function playCatSound(type) {

    // Find the selected sound
    const soundFile = catSounds[type];

    // Check whether the sound file exists in the list
    if (!soundFile) {
        alert("Please add the MP3 file for this cat sound!");
        return;
    }

    // Stop the previous sound
    if (currentCatAudio !== null) {
        currentCatAudio.pause();
        currentCatAudio.currentTime = 0;
    }

    // Create and play the selected audio
    currentCatAudio = new Audio(soundFile);

    currentCatAudio.volume = 1;

    currentCatAudio.play()
        .then(() => {
            console.log("Playing sound:", type);
        })
        .catch((error) => {
            console.error("Audio playback error:", error);

            alert(
                "Unable to play the sound. Please check the MP3 filename."
            );
        });
}