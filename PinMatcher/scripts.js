function generatePin() {
    const randomPin = Math.floor(1000 + Math.random() * 9000); // Generate a 4-digit random number
    document.getElementById('showNumber').value = randomPin;
}

function checkPin() {
    const generatedPin = document.getElementById('showNumber').value;
    const enteredPin = document.getElementById('checkNumber').value;

    if (generatedPin === enteredPin) {
        alert('PIN is correct!');
    } else {
        alert('PIN is incorrect!');
    }
}
