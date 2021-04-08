const today = new Date();
console.log(today); // uitkomst 2021-04-08T14:09:35.474Z

// aanmaken van een datum:
const dateOfBirth = new Date('Dec 26, 1992 15:45:55');
const dateOfBirth1 = new Date(1992, 11, 26, 15, 45, 55);
const dateOfBirth2 = new Date(1992, 11, 26);

//getTime()
const time1 = new Date(1992,11, 26, 15, 22,22   )
console.log(time1.getTime()); // uitkomst: 725324400000

//getDay() // geeft de dag van de week weer.
console.log(time1.getDay()); // uitkomst : 6

// getHours() // geeft het uur 0-23.
console.log(time1.getHours()); // uitkomst 15 uur.

//getMinutes() // geeft de minuten 0-59. 22 minuten .
console.log(time1.getMinutes());//

// getMonth // geeft de maanden 0-11.
console.log(time1.getMonth()); //uitkomst is 11.

// getSeconds // geeft de seconden 0-59.
console.log(time1.getSeconds()); // uitkomst geeft 22.

//.toDateString()) // geeft een engelse datum.
console.log(time1.toDateString()); // uitkomst Sat Dec 26 1992


// het nederlands maken van een datum !!!
const dateBirth = new Date(1992,11,26)

//nederlanse versie voluit.
const longOptions = {
    weekday: 'long',
    years: 'numeric',
    month: 'long',
    day: 'numeric'
};
const ducthDate = dateBirth.toLocaleDateString('nl-NL',longOptions);
console.log(ducthDate); // uitkomst geeft: zaterdag 26 december

