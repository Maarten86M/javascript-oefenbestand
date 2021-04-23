
// VOORBEELD EVENT LISTENER 1
// voorbeeld met de button op index.html.
function getNames() {
    alert("Hallo er is op de button geklikt");
}
const buttonElement = document.getElementById('names-button');
// als er op geklikt wordt, voer dan de functie getnames uit:
buttonElement.addEventListener('click', getNames);
// Wanneer we nu op de button klikken wordt de popup uitgevoerd.