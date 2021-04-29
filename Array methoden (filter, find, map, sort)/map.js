// kenmerken van de .map methode:
// itereert automatisch over de gehele lengte van de Array.
// voor iedere entry wordt de anonieme functie uitgevoerd.
// maakt een nieuwe array op basis van wat je in de return statement zet!
// De parameter die je de callback meegeeft bevat altijd de volledige entry van die loop.
// Let op: de originele array wordt niet aangepast!.


// voorbeeld 1
// Hoe deden we het voorheen met een For Loop:
const students = ["Henk", "Piet", "Klaas", "fred"];

for (let i = 0; i < students.length; i++) {
    students[i] = students[i] + "je";
}// [ 'Henkje', 'Pietje', 'Klaasje', 'fredje' ]

// Maar dit kan natuurlijk veel korter met de .map() methode.
const outcome = students.map((student) => {
    return student + "je"; // er moet altijd een return in staan.
}); // uitkomst na outcome loggen: [ 'Henkje', 'Pietje', 'Klaasje', 'fredje' ]

// voorbeeld 2
const studentDetails = [
    {
        name: "Henk Jansen",
        email: "henk@test.nl",
        course: "FSD Bootcamp"
    },
    {
        name: "Piet Pieters",
        email: "piet@test.nl",
        course: "HBO Sofware Dev"
    },
    {
        name: "Marieke Smit",
        email: "marieke@test.nl",
        course: "FSD Bootcamp"
    }
];
// oude manier:
let emails = []; // lege array om de waarde in op te slaan binnen de for loop.
for (let i = 0; i < studentDetails.length; i++) {
    emails.push(studentDetails[i].email);
}
// uitkomtst [ 'henk@test.nl', 'piet@test.nl', 'marieke@test.nl' ]

// Ook dit kan korter!
const emailAdress = studentDetails.map((studentdetail) => {
    return studentdetail.email; // dit wordt in de nieuwe array gezet.
});
// uitkomst van emailAdress loggen: [ 'henk@test.nl', 'piet@test.nl', 'marieke@test.nl' ]

// voorbeeld 3:

const studentsName = ['Henk Jansen', 'Piet Pieters', 'Marieke Smit'];
const prefixedStudents = studentsName.map((student) => {
    return "leerling: " + student;
}); // uitkomst na prefixed loggen: / ['Leerling: Henk Jansen', 'Leerling: Piet Pieters', 'Leerling: Marieke Smit']
// dus we geven een naam mee die erbij gezet moet worden in de nieuwe array.
// we slaan de waardes op in een nieuwe const. Om ze later weer te kunnen gebruiken.

// voorbeeld 4
const studentsCampusses = [
    {
        name: 'Henk Jansen',
        course: 'FSD Bootcamp',
    },
    {
        name: 'Piet Pieters',
        course: 'HBO Software development',
    },
    {
        name: 'Marieke Smit',
        course: 'FSD Bootcamp',
    },
];

const nameStudent = studentsCampusses.map((studentcampus) => {
    return "studentName:" + studentcampus.name;
}) // uitkomst na loggen nameStudent:[ 'studentName:Henk Jansen', 'studentName:Piet Pieters', 'studentName:Marieke Smit']
// we hebben nu de . notatie gebruikt om de specifieke namen te pakken.


// voorbeeld 5 (vanuit Edhub)
// 2. Maak een array met daarin alle geboortejaren van de uitvinders
// Verwachte uitkomst: [1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847];
const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Thomas', last: 'Edison', year: 1847, passed: 1931}
];

const birthArray = inventors.map((inventor) => {
    return inventor.year;
}) // uitkomst na loggen:[ 1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847 ]


// voorbeeld 6 (edhub opdracht)
// 3. Maak een array met daarin alle volledige namen van de uitvinders (dus voor- en achternaam als één string)
// Verwachte uitkomst: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']

const nameString = inventors.map((inventor) => {
    return inventor.first + " " + inventor.last;
}) // uitkomst na loggen: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']

console.log(nameString);// kenmerken van de .map methode:
// itereert automatisch over de gehele lengte van de Array.
// voor iedere entry wordt de anonieme functie uitgevoerd.
// maakt een nieuwe array op basis van wat je in de return statement zet!
// De parameter die je de callback meegeeft bevat altijd de volledige entry van die loop.
// Let op: de originele array wordt niet aangepast!.


// voorbeeld 1
// Hoe deden we het voorheen met een For Loop:
const studentsOne = ["Henk", "Piet", "Klaas", "fred"];

for (let i = 0; i < studentsOne.length; i++) {
    studentsOne[i] = studentsOne[i] + "je";
}// [ 'Henkje', 'Pietje', 'Klaasje', 'fredje' ]

// Maar dit kan natuurlijk veel korter met de .map() methode.
const outcomeTen = studentsOne.map((student) => {
    return student + "je"; // er moet altijd een return in staan.
}); // uitkomst na outcome loggen: [ 'Henkje', 'Pietje', 'Klaasje', 'fredje' ]

// // voorbeeld 2
// const studentDetails = [
//     {
//         name: "Henk Jansen",
//         email: "henk@test.nl",
//         course: "FSD Bootcamp"
//     },
//     {
//         name: "Piet Pieters",
//         email: "piet@test.nl",
//         course: "HBO Sofware Dev"
//     },
//     {
//         name: "Marieke Smit",
//         email: "marieke@test.nl",
//         course: "FSD Bootcamp"
//     }
// ];
// // oude manier:
// let emails = []; // lege array om de waarde in op te slaan binnen de for loop.
// for (let i = 0; i < studentDetails.length; i++) {
//     emails.push(studentDetails[i].email);
// }
// // uitkomtst [ 'henk@test.nl', 'piet@test.nl', 'marieke@test.nl' ]
//
// // Ook dit kan korter!
// const emailAdress = studentDetails.map((studentdetail) => {
//     return studentdetail.email; // dit wordt in de nieuwe array gezet.
// });
// // uitkomst van emailAdress loggen: [ 'henk@test.nl', 'piet@test.nl', 'marieke@test.nl' ]

// voorbeeld 3:
//
// const studentsName = ['Henk Jansen', 'Piet Pieters', 'Marieke Smit'];
// const prefixedStudents = studentsName.map((student) => {
//     return "leerling: " + student;
// }); // uitkomst na prefixed loggen: / ['Leerling: Henk Jansen', 'Leerling: Piet Pieters', 'Leerling: Marieke Smit']
// // dus we geven een naam mee die erbij gezet moet worden in de nieuwe array.
// // we slaan de waardes op in een nieuwe const. Om ze later weer te kunnen gebruiken.

// voorbeeld 4
const studentsCampussesTwo = [
    {
        name: 'Henk Jansen',
        course: 'FSD Bootcamp',
    },
    {
        name: 'Piet Pieters',
        course: 'HBO Software development',
    },
    {
        name: 'Marieke Smit',
        course: 'FSD Bootcamp',
    },
];

const nameStudent = studentsCampussesTwo.map((studentcampus) => {
    return "studentName:" + studentcampus.name;
}) // uitkomst na loggen nameStudent:[ 'studentName:Henk Jansen', 'studentName:Piet Pieters', 'studentName:Marieke Smit']
// we hebben nu de . notatie gebruikt om de specifieke namen te pakken.


// voorbeeld 5 (vanuit Edhub)
// 2. Maak een array met daarin alle geboortejaren van de uitvinders
// Verwachte uitkomst: [1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847];
const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Thomas', last: 'Edison', year: 1847, passed: 1931}
];

const birthArray = inventors.map((inventor) => {
    return inventor.year;
}) // uitkomst na loggen:[ 1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847 ]


// voorbeeld 6 (edhub opdracht)
// 3. Maak een array met daarin alle volledige namen van de uitvinders (dus voor- en achternaam als één string)
// Verwachte uitkomst: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']

const nameString = inventors.map((inventor) => {
    return inventor.first + " " + inventor.last;
}) // uitkomst na loggen: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']


// Eigen voorbeeld /map()
// to uppercase alles.
const arrayOne = ["een", "twee", "drie", "vier", "vijf", "zes", "zeven", "acht", "negen", "tien"];

const makeCaps = arrayOne.map((array) => {
    return array.toUpperCase();
})

const outcome = makeCaps;
console.log(outcome);


// voorbeeld vanuit TECH IT EASY opdracht:

const inventory = [
    {
        type: '43PUS6504/12',
        name: '4K TV',
        brand: 'Philips',
        price: 379,
        availableSizes: [43, 50, 58, 65],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 23,
        sold: 2,
    },
    {
        type: 'NH3216SMART',
        name: 'HD smart TV',
        brand: 'Nikkei',
        price: 159,
        availableSizes: [32],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'HD ready',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 4,
        sold: 4,
    },
    {
        type: 'QE55Q60T',
        name: '4K QLED TV',
        brand: 'Samsung',
        price: 709,
        availableSizes: [43, 50, 55, 58, 65],
        refreshRate: 60,
        screenType: 'QLED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 7,
        sold: 0,
    },
    {
        type: '43HAK6152',
        name: 'Ultra HD SMART TV',
        brand: 'Hitachi',
        price: 349,
        availableSizes: [43, 50, 55, 58],
        refreshRate: 60,
        screenType: 'LCD',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: false,
        },
        originalStock: 5,
        sold: 5,
    },
    {
        type: '50PUS7304/12',
        name: 'The One 4K TV',
        brand: 'Philips',
        price: 479,
        availableSizes: [43, 50, 55, 58, 65, 70],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: true,
            hdr: true,
            bluetooth: true,
            ambiLight: true,
        },
        originalStock: 8,
        sold: 3,
    },
    {
        type: '55PUS7805',
        name: '4K LED TV',
        brand: 'Philips',
        price: 689,
        availableSizes: [55],
        refreshRate: 100,
        screenType: 'LED',
        screenQuality: 'Ultra HD/4K',
        smartTv: true,
        options: {
            wifi: true,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: true,
        },
        originalStock: 6,
        sold: 3,
    },
    {
        type: 'B2450HD',
        name: 'LED TV',
        brand: 'Brandt',
        price: 109,
        availableSizes: [24],
        refreshRate: 60,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: false,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
    {
        type: '32WL1A63DG',
        name: 'HD TV',
        brand: 'Toshiba',
        price: 161,
        availableSizes: [32],
        refreshRate: 50,
        screenType: 'LED',
        screenQuality: 'Full HD',
        smartTv: false,
        options: {
            wifi: false,
            speech: false,
            hdr: true,
            bluetooth: false,
            ambiLight: false,
        },
        originalStock: 10,
        sold: 8,
    },
];

// Opdracht 1a: Hoeveel exemplaren moeten we nog verkopen? Schrijf een functie die dit berekent.

function calculateTVStoSell() {
    const tvsoldArray = inventory.map((television) => {
        return television.originalStock - television.sold;
    })
    let uitkomst = 0;
    for (let i = 0; i < tvsoldArray.length; i++){
        const tvSoldnumber = tvsoldArray[i];
        uitkomst = uitkomst + tvSoldnumber;
    }
    return uitkomst;
}
const oucomeTV = calculateTVStoSell();
console.log(oucomeTV);


