// 1. Lokaliseer de plek van het element waar je mee wil werken en sla deze referentie op.

// * Een enkel element.
const container = document.getElementById("page");
// * Meerde elementen tegelijkertijd
const listItems = document.getElementsByClassName("ingrdienten");



// 2. Aanpassingen maken: Wanneer je jouw element hebt gelokaliseerd kun je er aanpassingen op maken, of ht element gebruiken
// als een "anker" om andere elementen in te plaatsen.

// * Een nieuwe node maken(bijv lege <p> </p>
const warningMessage = document.createElement('p');

// * Een attribute toevoegen: (bijv class, id, src etc.)
warningMessage.setAttribute('class', 'warning');

// * Een attribuut verwijderen:
warningMessage.removeAttribute('class');

// * tekst toevoegen dit kan met de textContent property
warningMessage.textContent = "Hier kan je een tekst plaatsen";

// * Een elementen toevoegen aan de DOM Tree : Wanneer we bijv. een paragraaf willen toevoegen aan de DOM tree.
container.appendChild(warningMessage);


//EVENT LISTENERS.
//Stel we hebben een functie genaamd getNames() die uitgevoerd moet worden wanneer een button wordt aangeklikt.
// Als we deze event listener via de DOM aan ons element willen toevoegen, doen we dat als volgt:

// functie:
function getNames() {
    console.log("hallo");
}

const buttonElement = document.getElementById("names-button");
// als er op dit element geklikt wordt, voer dan de functie getNames uit:
buttonElement.addEventListener('click',getNames)

//EVENT OBJECT. 
// Iedere keer als een event wordt getriggerd, zal de event Listener een EVENT OBJECT aanmaken.
// met daarin alle inormatie over wat er zojuit gebeurd is. Bij. keyboard event etc. 
// of je deze info nodig hebt of niet, het event object wordt altijd doorgeven aan de functie tijdens dit event wordt aangeroepen. 
// Als je deze info wilt gebruiken, moet je in de functieparameter aangeven dat dit event mag worden opgevangen. 
// dit doe je door HET EVENT ALS PARAMETER TE VERWACHTEN. Bij Concentie noemen we deze parameter altijd e(van event). 

const passwordInput = document.getElementById('user-password');
// we voegen de functienaam toe aan de event listener:
passwordInput.addEventListener('keyup',getPassword);
// laat de functie het event ontvangen onder de parameter e ie automatisch wordt doorgegeven.
function getPassword(e) {
    console.log(e);
}

 // wat kan je zoals vinden op het event object:
 // * property KeyCode (e.keyCode) = toetscode.
 // * property timeStamp(e.timeStamp) = moment van trigger.
 // * e.target.value = weten wat de warde van het input veld is op het moment van triggeren.


//ARGUMENTEN MEEGEVEN.
// Wanneer we de functies willen aanroepen op basis van een event, kan het natuurlijk ook voorkomen.
// dat we argumenten aan onze functie willen megeven. bijvoorbeeld een functie die twee waardes bij elkaar optelt.
// Dit mag helaas niet zo:

function calculateSum(a,b) {
    return a + b;
}
const button = document.getElementById('calculate-button');
// hoeweeel ht voordehandligens is, mag dit helaas niet:
button.addEventListener("click", calculateSum(2,4));
// dit komt omdat je geen ronde haken achter de functienaam in event listeners mag zetten.
// Daar hebben de makers van JAvaScript een handigheidje voor bedacht:
// We wikkelen onze functie-aanroep in een anonieme functie. Deze functie wacht netjes zijn uitvoer
// tot het event wordt getriggerd:
button.addEventListener('click', () =>{
    calculateSum(2,4);
})