// voorbeeld Array

const Array = ["Henk", "Jan", "Piet", "Kees", "Ria", "Maarten"];
console.log(Array);
console.log(Array[2]); // is dan piet
console.log(Array.length); // geeft de lengte van een array

const arraylast = Array.length -1;  // laatste uit de array
console.log(arraylast); // geeft 5
console.log(Array[arraylast]); // geeft maarten

// Array iets aanpassen.
nameAanpassen = Array[2] = "Kevin";
console.log(Array);


// Voorbeeld Object
const voorbeeld = {
    name: "objectOne",
    sport: "Fitness",
    place: "Tilburg",
    age: 32,
    family: ["kees", "jan", "piet", "henk"],
    objectinArray: {
        car: "volvo",
        dogAge: "33",
        food: ["pizza", "cheese", "friet"]
    }
}

console.log(voorbeeld.family);
console.log(voorbeeld.objectinArray);
console.log(voorbeeld.objectinArray.dogAge);