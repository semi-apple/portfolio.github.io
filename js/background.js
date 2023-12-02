const canvas = document.getElementById('binaryCanvas');
const ctx = canvas.getContext('2d');

canvas.width = window.outerWidth;
canvas.height = window.outerHeight;

const binaryChars = ['0', '1'];
const fontSize = 14;
const columns = canvas.width / fontSize;

let drops = [];
for (let x = 0; x < columns; x++) {
    drops[x] = 1;
}

function draw() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';  // Adding some transparency to see the trail effect
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = '#00FF00';  // Green color for the binary numbers
    ctx.font = fontSize + 'px arial';

    for (let i = 0; i < drops.length; i++) {
        const text = binaryChars[Math.floor(Math.random() * binaryChars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
        }
        drops[i]++;
    }
}

setInterval(draw, 33);  // Adjust the interval for faster or slower rain
