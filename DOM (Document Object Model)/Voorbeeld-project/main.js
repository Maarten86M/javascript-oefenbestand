// VOORBEELD EVENT LISTENER 1
// voorbeeld met de button op index.html.
function getNames() {
    alert("Hallo er is op de button geklikt");
}

const buttonElement = document.getElementById('names-button');
// als er op geklikt wordt, voer dan de functie getnames uit:
buttonElement.addEventListener('click', getNames);
// Wanneer we nu op de button klikken wordt de popup uitgevoerd.

// VOORBEELD 2 VANUIT EDHUB OPDRACHT.
// [X] 1. Sla de referentie naar het gebruikersnaam-veld op
// [X] 2. Sla de referentie naar het gebruikersnaam-waarschuwing element op
// [X] 3. Zet een event listener op het gebruikersnaam-veld
// [X] 4. Maak een functie die de event listener kan aanroepen als de gebruiker input geeft
// [ ] 5. Laat die functie checken of de huidige waarde van de input een '@' bevat
// [ ] 6. Als dit zo is, geef de waarschuwing weer
// [ ] 7. Als dit niet zo is, zorg dan dat de waarschuwing verdwijnt
// [ ] 8. Herhaal deze stappen voor het wachtwoord

// referentie naar de invoervelden.
const userInputField = document.getElementById('username');
const passInputField = document.getElementById('password');

// referentie naar de waarschuwingen.
const userWarning = document.getElementById('username-warning');
const passWarning = document.getElementById('pass-warning');

// eventListener op de velden.
userInputField.addEventListener("keyup", userFieldCheck);
passInputField.addEventListener("keyup", passFieldCheck);

// functie die de event listener kan aanroepen als de gebruiker input geeft
function userFieldCheck(e) {
    if (e.target.value.includes('@')) {
        userWarning.textContent = "Gebruikersnaam mag geen @ bevatten";
    } else {
        userWarning.textContent = "";
    }
}

function passFieldCheck(e) {
    if (e.target.value === "" || e.target.value.length > 6) {
        passWarning.textContent = "";
    } else {
        passWarning.textContent = "wachtwoord is te kort, gebruik minimaal 6 tekens";
    }
}