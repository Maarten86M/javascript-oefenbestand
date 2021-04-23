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
}); // uitkomst na outcome loggen: [ 'Henkje', 'Pietje', 'Klaasje', 'fredje' ]

// voorbeeld 2
const studentDetails =  [
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
for (let i = 0; i < studentDetails.length; i++){
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

const nameStudent = studentsCampusses.map((studentcampus) =>{
    return "studentName:" + studentcampus.name;
}) // uitkomst na loggen nameStudent:[ 'studentName:Henk Jansen', 'studentName:Piet Pieters', 'studentName:Marieke Smit']
// we hebben nu de . notatie gebruikt om de specifieke namen te pakken.


//
// Voorbeelden uit de opdrachten van Github.
//
