// Predefined audio mappings
const audioMapping = {
    "আমার": "audio/আমার.mp3",
    "বাংলা": "audio/বাংলা.mp3",
    "ভালোবাসি": "audio/ভালোবাসি.mp3",
    "সোনার": "audio/সোনার.mp3",
    "থাকি": "audio/থাকি.mp3",
    "ঢাকায়": "audio/ঢাকায়.mp3",
    "আমি": "audio/আমি.mp3",
    "আমাকে": "audio/আমাকে.mp3",


    
};

// Function to play a single audio file
function playAudio(file) {
    return new Promise((resolve) => {
        const audio = new Audio(file);
        audio.play();
        audio.onended = resolve; // Resolve the promise when audio ends
    });
}

// Convert Bangla text to speech
async function convertToSpeech() {
    const textArea = document.getElementById("banglaText");
    const status = document.getElementById("status");

    // Get user input
    const text = textArea.value.trim();
    if (!text) {
        status.innerText = "অনুগ্রহ করে বাংলা টেক্সট লিখুন।";
        return;
    }

    // Parse input into words
    const words = text.split(/\s+/);

    // Play audio for each word sequentially
    status.innerText = "সাউন্ড প্লে হচ্ছে...";
    for (let word of words) {
        if (audioMapping[word]) {
            await playAudio(audioMapping[word]);
        } else {
            console.warn(`Audio not found for: ${word}`);
        }
    }

    status.innerText = "সাউন্ড প্লে শেষ।";
}

// Attach event listener to the button
document.getElementById("convertButton").addEventListener("click", convertToSpeech);
