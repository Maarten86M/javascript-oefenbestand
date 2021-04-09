// voorbeeld Array

const Array = ["Henk", "Jan", "Piet", "Kees", "Ria", "Maarten"];
console.log(Array);
console.log(Array[2]); // is dan piet
console.log(Array.length); // geeft de lengte van een array

const arraylast = Array.length - 1;  // laatste uit de array
console.log(arraylast); // geeft 5
console.log(Array[arraylast]); // geeft maarten

// Array iets aanpassen.
Array[2] = "Kevin";
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


// array oefenen 08-04-2021
const arrayOne = [1998, 1999, 2000, 2001, 2002, 2003];
console.log(arrayOne);

arrayOne.push(2004)
console.log("push", arrayOne); // voegt 2004 toe aan de laaste binnen de array

arrayOne.pop();
console.log("pop", arrayOne); // haalt de laaste weer weg.

arrayOne.shift();
console.log("shift", arrayOne); // haalt de eerste weg binnen een array.

arrayOne.splice(0, 1, 2999); // veranderd nu 1999 in 2099.
console.log("splice", arrayOne);

arrayOne.splice(3, 1, 3333);
console.log("splice2", arrayOne); // veranderd de 4de waarde binnen een array , 0, 1, 2, [3],

arrayOne.splice(1, 0, 2342); // nu voegt hij een waarde toe op plaats 2.
console.log("splice3", arrayOne);

const arrayLast = arrayOne.length - 1; // uitkomst is 2003 . Dus de laatste binnen de array.
console.log(arrayOne[arraylast]);

// object oefenen 08-04-2021.
const student = {
    name: "henk",
    age: 23,
    job: "timmerman",
    kids: ["jan", "piet", "karel", "kees"],
    cars: {
        sportcar: "ferrari",
        SUV: "hummer",
        audi: ["a3", "a4", "rs6"],
        classics: "mercedes"
    },
    bank: 3345532
}

console.log("saldo bank",student.bank);
console.log("sportwagens",student.cars.audi); // loggen binnen een object in een object met daarin een array.
student.cars.audi[1] = "rsq8"; // nu is a4 aangepast naar rsq8.
student.cars.audi.pop(); // nu haalt hij binnen audi de rs6 weg. dus laatste in die array.
student.kids.shift(); // nu haalt hij bij de kinder Jan weg.
console.log(student.len)




// Array of objects & for loop & if else statements.
const bankAccount = [
    { name: "account1", saldo: 3453, pin: "2234" },
    { name: "account2", saldo: 234445, pin: "3344" },
    { name: "account3", saldo: 34455, pin: "0000" }
    ]
// console.log(bankAccount[0]);

const inputPin = "2234"
const inputAccount = "account1"

for (let i = 0; i < bankAccount.length; i++){
    if ((inputAccount === bankAccount[i].name) && (inputPin === bankAccount[i].pin)){
        console.log("uw saldo is $ " + bankAccount[i].saldo);
    }
    else if (!(inputAccount === bankAccount[i].name) === (inputPin === bankAccount[i].pin)){
        console.log("probeer het nogmaals")
    }
}




