const colorDisplays = document.querySelectorAll('.color-display');
const colorLists = document.querySelectorAll('.color-list');
const colorOptions = document.querySelectorAll('.color-option');
const guessRows = document.querySelectorAll('.guess-row');
const submitButton = document.querySelector('#submit-guess');

const ALL_COLORS = ['red', 'cyan', 'blue', 'green', 'pink', 'yellow', 'brown', 'orange', 'purple', 'magenta'];
let COLORS = []; // dynamische Farbpalette
const CODE_LENGTH = 4;

let secretCode = [];
let currentRound = 0;

/*Nutzer wählt Anzahl der Farben (1–10)*/
function chooseNumberOfColors() {
    let num = parseInt(prompt("Wähle die Anzahl der Farben (1–10):"));

    if (isNaN(num) || num < 1 || num > 10) {
        alert("Ungültige Eingabe. Default Farbeanzahl ist 5.");
        num = 5;
    }

    COLORS = ALL_COLORS.slice(0, num);
    console.log("Verwendete Farben:", COLORS);
}

/*Dropdown-Farblisten dynamisch erzeugen*/
function populateColorLists() {
    colorLists.forEach(list => {
        list.innerHTML = ""; // alte Optionen löschen

        // neue Optionen hinzufügen
        COLORS.forEach(color => {
            const opt = document.createElement("div");
            opt.classList.add("color-option");
            opt.dataset.color = color;
            opt.style.backgroundColor = color;
            list.appendChild(opt);
        });
    });

    // neue Klick-Events setzen
    const newOptions = document.querySelectorAll(".color-option");
    newOptions.forEach(option => {
        option.addEventListener("click", () => {
            const color = option.dataset.color;

            if (color) {
                option.parentNode.previousElementSibling.style.backgroundColor = color;
                option.parentNode.previousElementSibling.dataset.color = color;
            }

            option.parentNode.classList.remove('show');
        });
    });
}

/* UI: Farbauswahl öffnen/schließen*/
colorDisplays.forEach((display, index) => {
    display.addEventListener('click', () => {
        colorLists[index].classList.toggle('show');
    });
});

/*Geheimen Code erzeugen*/
function generateSecretCode() {
    secretCode = [];
    for (let i = 0; i < CODE_LENGTH; i++) {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        secretCode.push(randomColor);
    }
    console.log("Secret Code:", secretCode);
}

/* Guess auslesen */
function getCurrentGuess() {
    const guess = [];
    colorDisplays.forEach(display => {
        guess.push(display.dataset.color || null);
    });
    return guess;
}

/* Guess ins Board schreiben */
function renderGuessInRow(guess) {
    const row = guessRows[currentRound];
    const items = row.querySelectorAll('.guess-item');

    guess.forEach((color, i) => {
        items[i].dataset.color = color;
    });
}

/* Mastermind Bewertung */
function evaluateGuess(guess) {
    const result = { black: 0, white: 0 };

    const codeCopy = [...secretCode];
    const guessCopy = [...guess];

    // Schwarze Treffer
    for (let i = 0; i < CODE_LENGTH; i++) {
        if (guessCopy[i] === codeCopy[i]) {
            result.black++;
            codeCopy[i] = null;
            guessCopy[i] = null;
        }
    }

    // Weiße Treffer
    for (let i = 0; i < CODE_LENGTH; i++) {
        if (guessCopy[i]) {
            const index = codeCopy.indexOf(guessCopy[i]);
            if (index !== -1) {
                result.white++;
                codeCopy[index] = null;
                guessCopy[i] = null;
            }
        }
    }

    return result;
}

/* Feedback rendern */
function renderResultInRow(result) {
    const row = guessRows[currentRound];
    const resultItems = row.querySelectorAll('.guess-result-item');

    let index = 0;

    // Schwarz
    for (let i = 0; i < result.black; i++) {
        resultItems[index].dataset.color = 'black';
        index++;
    }

    // Weiß
    for (let i = 0; i < result.white; i++) {
        resultItems[index].dataset.color = 'white';
        index++;
    }
}

/* Hauptfunktion */
function submitGuess() {
    const guess = getCurrentGuess();

    if (guess.includes(null)) {
        alert("Bitte alle vier Farben wählen!");
        return;
    }

    renderGuessInRow(guess);

    const result = evaluateGuess(guess);
    renderResultInRow(result);

    if (result.black === CODE_LENGTH) {
        alert("Du hast den Code geknackt!");
        submitButton.disabled = true;
        return;
    }

    currentRound++;

    if (currentRound >= guessRows.length) {
        alert("Leider verloren! Der Code war: " + secretCode.join(", "));
        submitButton.disabled = true;
    }
}

submitButton.addEventListener('click', submitGuess);

/*Spiel starten*/
chooseNumberOfColors();   // Spieler wählt Anzahl der Farben
populateColorLists();     // Dropdowns aktualisieren
generateSecretCode();     // Geheimen Code erzeugen
