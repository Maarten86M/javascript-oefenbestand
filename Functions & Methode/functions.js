function congratulate() {
    console.log("Gefeliciteerd!");
}
// congratulate(); // hiermee run je de functie

// let name = "Henk";
// console.log(name + " is 40 geworden.");
// congratulate(); // hierbij maak je gebruik van de vorige functie.
//
// name = "Piet";
// console.log(name + " is 23 geworden.");
// congratulate(); // ook hierbij maak je gebruik van de bovenstaande functie in combitnatie van de console.log

//
function getArea(width, length) {
    return width * length;
}

const officeArea = getArea(4, 5);
const livingRoomArea = getArea(3, 11);

// console.log(officeArea);
// console.log(livingRoomArea);

// return in een array.

function getAreaSizes(width, length, depth) {
    const area = width * length; // 4 * 4 = 16
    const volume = width * length * depth; // 4 * 4 * 2.5 = 40
    return [area, volume]; // we bewaren het in een array.
}

const kitchenSizes = getAreaSizes(4, 4, 2.5);
console.log(kitchenSizes); // geeft [16, 40]


// Oefeningen vanuit Edhub.
function compiment() {
    return "lekkr bezig met die functie, maarten";
}
const outcomeTwo = compiment();
console.log(outcomeTwo);



function getDetails() { // een function met een object erin verwerkt.
    return {
        firstname: "Maarten",
        lastname: "Moelands"
    }
}
const outcomeFour = getDetails();
console.log(outcomeFour);



function minutesToSecons(minutes) {  // functie die minuten omrekend in seconden.
    return minutes * 60;
}
const resultTwo = minutesToSecons(23);
console.log(resultTwo);


function calculateDogYears(age) {  // ook hier kun je strings toevoegen om een zin te vormen met de score.
    return "jouw hond is " + age * 7 + " jaar oud in mensenjaren";
}
const resultFour = calculateDogYears(2);
console.log(resultFour);


function wrapper(woord, karakter) { // ook hier zet je woorden in een andere volgorde.
    return karakter + woord + karakter;
}
const resultFive = wrapper("beep", "_");
console.log(resultFive);



function createDetailString(firstName, LastName, profession) { // maken we gebruik van 3 parameters.
    return "Het beroep van " + firstName +" "+ LastName + " is " +profession;
}
const resultSix = createDetailString("jan", "jansen", "docent");
console.log(resultSix);