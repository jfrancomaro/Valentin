document.addEventListener("DOMContentLoaded", function () {

    const lines = ["$ ./run_feelings.sh", "", "Initializing emotions...", "Loading memories...",
        "Loading first date memory...", "Remembering when we met in that cafe...", "Analyzing heart status...",
        "Result: Completely in love.", "", "Target detected: Brendi (Mi ratita)", "", "Compiling courage...",
        "Franco.exe is nervous...", ""];

    let terminal = document.getElementById("terminal");
    let lineIndex = 0;
    let charIndex = 0;

    function typeEffect() {
        if (lineIndex < lines.length) {

            if (charIndex < lines[lineIndex].length) {
                terminal.innerHTML += lines[lineIndex].charAt(charIndex);
                charIndex++;
                setTimeout(typeEffect, 40);
            } else {
                terminal.innerHTML += "\n";
                lineIndex++;
                charIndex = 0;
                setTimeout(typeEffect, 500);
            }

        } else {
            document.getElementById("question").style.display = "block";
            document.getElementById("yesBtn").style.display = "inline-block";
            document.getElementById("noBtn").style.display = "inline-block";
        }
    }

    setTimeout(typeEffect, 800);

    window.yes = function () {

        document.body.style.paddingTop = "0px";

        document.body.innerHTML = `
        <div style="margin-top:80px; padding:0 20px 80px 20px; font-family:monospace; color:#ff4da6; text-align:center;">
            
            <h1 id="title">Access Granted</h1>
            
            <img src="img/foto.jpg" 
                 style="width:80%; max-width:320px; border-radius:20px; margin-top:30px; box-shadow:0 0 20px #ff4da6;" 
                 alt="Franco y Brendi juntos">
            
            <p style="font-size:20px; margin-top:30px;">
                Ahora oficialmente eres mi San Valentín.
            </p>
            
            <p style="font-size:22px; margin-top:20px;">
                Perdón si a veces soy un tonto...
                pero te amo con todo mi corazón ❤️
            </p>
            <button onclick="showCinema()" 
            style="
                background-color:#ff0077;
                color:white;
                border:none;
                padding:12px 25px;
                font-size:18px;
                margin-top:30px;
                border-radius:10px;
                cursor:pointer;
            ">
            🎵 Activa modo cine
            </button>

            <p id="cineMessage" style="margin-top:20px; font-size:20px; color:#ff99cc;"></p>
        </div>
    `;

        document.getElementById("title").classList.add("vibrate");
    };



    window.no = function () {
        const phrases = ["¿Segura?", "Eso suena sospechoso...", "Reintentar...", "Sistema no acepta esa opción", "Intenta otra vez..."];

        let btn = document.getElementById("noBtn");
        btn.innerText = phrases[Math.floor(Math.random() * phrases.length)];

        btn.style.position = "fixed";
        btn.style.zIndex = "9999";

        const buttonWidth = btn.offsetWidth;
        const buttonHeight = btn.offsetHeight;

        const maxX = window.innerWidth - buttonWidth;
        const maxY = window.innerHeight - buttonHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        btn.style.left = randomX + "px";
        btn.style.top = randomY + "px";
    };
});

function showCinema() {
    document.getElementById("cineMessage").innerHTML =
        "🎬 Mi amor, mira la tele... lo que viene ahora no lo ejecuta el sistema, lo ejecuta el corazón ❤️";
}