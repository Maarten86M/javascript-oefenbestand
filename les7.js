// Bank

//Red (het werkt niet) --> green (het werkt) --> refactor(opschonen of verbeteren).
// 1functie eisen ->
// 2 data modelleren ->
// 3. stappenplan -->
// 4. Hapy Path
// 5. Unhappy path
// 6. Opschonen.

// saldo opvragen
// -> Rekening -> object
//      Naam: string
//      nummer: string
//      pin: string
//      id: number
//      saldo: number

// Rekeningen -> Array van objecten.  Array<Rekeningen>

//input: rekeningen, pin, id.
// output: saldo.

// stappenplan
// - Rekeningen aanmaken (dummy data)
// - variabelen aanmaken.
// - id nodig (dummy input)
// - pin nodig (dummy input)
// - zoeken naar een rekening met de iban uit de input.
// - checken is de pin correct?
// - saldo uit opbject halen.
// - saldo weergeven

const accounts = [
    {id: 1, name: "tim", iban: "INGB110000999911", pin: "1234", saldo: 250},
    {id: 2, name: "Maarten", iban: "INGB110000999912", pin: "5555", saldo: 3300},
    {id: 3, name: "Henk", iban: "INGB110000999913", pin: "0000", saldo: 10}
];

//scenario 1 (Happy path)
const ibanInput = "INGB110000999912";
const pinInput = "5555";


// oude voorbeeld
// let account;
// switch (idInput) {
//     case 1:
//         account = accounts[0];
//         break;
//     case 2:
//         account = accounts[1];
//         break;
//     case 3:
//         account = accounts[2];
//         break;
//
//     default:
//         account = null;
//         break;
// }
// herschreven oude code, nieuw.
let account

for (index = 0; index < accounts.length; index++){
    if (accounts[index].iban === ibanInput){
        account = accounts[index];
    }
}

// for(const element of accounts){
//     console.log("aacout a time" , element);
// }


//     console.log(accounts[index].iban === ibanInput);
// }


// console.log('wich pin:', account.pin, pinInput, account.pin === pinInput);

if (account.pin === pinInput){
    console.log("check");
    const saldo = account.saldo;
    console.log("Uw saldo bedraagd $ " + saldo);
} else {
    console.log("uw pincode is niet correct, probeer het nog eens.")
}

//desired output
// uw saldo bedraagt: $3000

// //scenario 2  (unhappy path)
// const idInput = 2;
// const pinInput = "1111";
// desired output
// uw pincode is niet correct, probeer het nog eens.