const ingredients = ["spek", "ei", "bakvorm", "bloem", "bakmeel"];

// &&
if ((ingredients !== undefined) && (ingredients.length >3)){ // logt je kunt boodschappen doen.
    console.log("je kunt boodschappen doen");
}
else{
    console.log("wacht nog eventjes");
}

// ||
const x = 5
const y = 4

const test = (x===5 || y===5); // is true , 1 van de twee is gelijk aan het getal 5
console.log(test);

// !

const testTwo = !(x===4); // true, het is niet gelijk aan 5
console.log(testTwo);