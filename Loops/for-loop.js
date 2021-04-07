// simpele for-loop

for (index = 0; index < 9; index ++){
    console.log(index);
}

// voorbeeld met een array of objects.
const accounts = [
    {naam: "Maarten", age: 32, sport: "tennis", place: "Tilburg", nr: 33},
    {naam: "Henk", age: 18, sport: "fitness", place: "Eindhoven", nr: 11},
    {naam: "Jan", age: 42, sport: "Wielrennen", place: "Breda", nr: 12},
    {naam: "Sjaak", age: 88, sport: "Voetval", place: "Den Bosch", nr: 122}
]

for (let indexX = 0; indexX < accounts.length; indexX++){
    console.log(accounts[indexX].sport);
}

// dit kan ook op een makkelijkere manier, de rein manier.
for (const test of accounts){
    console.log(test.sport);
}

// in een for-loop kan je ook werken met een statement.

for (let numberX = 0; numberX <16; numberX++){
    if (numberX === 0) {
        console.log(numberX + "is even");
    }
    else if (numberX % 2 === 0){
        console.log(numberX + "is even");
    }
    else {console.log(numberX + "is oneven")}
}

// ook kan je een vergelijker er in bouwen. Dus log 4 keer een woord, de vijfde keer iets anders.
for (let woord = 0; woord <4; woord++){
    console.log("woordje");
}
if (woord =>4){
    console.log("klaar")
}

// iets aanpassen binnen een array doormiddel van loops.
const names = ["Henk", "Piet", "Fred", "Joop"];

for (let indexName = 0; indexName < names.length; indexName++){
    console.log(names[indexName] + "je");
}

// je kunt ook de nummers uit een array vermenigvuldigen.
const numbers = [2, 4, 5, 29, 38];
for (let multiply = 0; multiply < numbers.length; multiply++){
    console.log(numbers[multiply] * 10)
}

// ook kan je de waardes uit de array met zichzelf laten vermenigvuldigen.
const squares = [30, 2, 8, 24, 11];
for (let volume = 0; volume < squares.length; volume++){
    console.log(squares[volume] * squares[volume] * squares[volume]);
}

for (let testCase of squares){ // zelfde uitkomst.
    console.log(testCase * testCase * testCase)
}