// kenmerken van de .map methode:
// itereert automatisch over de gehele lengte van de Array.
// voor iedere entry wordt de anonieme functie uitgevoerd.
// maakt een nieuwe array op basis van wat je in de return statement zet!
// De parameter die je de callback meegeeft bevat altijd de volledige entry van die loop.
// Let op: de originele array wordt niet aangepast!.


// voorbeeld 1
// Hoe deden we het voorheen met een For Loop:
const students = ["Henk", "Piet", "Klaas", "fred"];

for (let i = 0; i < students.length; i++){
    students[i] = students[i] + "je";
}// [ 'Henkje', 'Pietje', 'Klaasje', 'fredje' ]

// Maar dit kan natuurlijk veel korter met de .map() methode.
const outcome = students.map((student) => {
    return student + "je"; // er moet altijd een return in staan.
});
console.log(outcome);