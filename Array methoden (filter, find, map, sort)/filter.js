// .filter() methode.

// wanneer handig? :
// stel je hebt een gigantische array , maar je wil alleen de studenten eruit halen die een onvoldoende hebben.
// dan krijg je alle waarde terug zoals bijvoorbeeld, naam + tel om ze te benaderen.

// Voorbeeld 1
const studentsInfo = [
    {
        name: 'Henk Jansen',
        course: 'FSD Bootcamp',
        averageGrade: 7,
    },
    {
        name: 'Piet Pieters',
        course: 'HBO Software development',
        averageGrade: 6,
    },
    {
        name: 'Marieke Smit',
        course: 'FSD Bootcamp',
        averageGrade: 7.5,
    },
];
// we hebben alleen de gegevens nodig van de student die de FSD bootcamp doet.
// We gaan de huidige array filteren.

const bootcampStudents = studentsInfo.filter((student) => {
    return student.course === "FSD Bootcamp";
});
// uitkomt bij loggen:
//{ name: 'Henk Jansen', course: 'FSD Bootcamp', averageGrade: 7 },
//{ name: 'Marieke Smit', course: 'FSD Bootcamp', averageGrade: 7.5 }

// doormiddel van deze methode kunnen we specifiek opzoek naar namen.



// voorbeeld 2 (edhub opdracht).
// 1. Filter de lijst op uitvinders die geboren zijn in de 16e eeuw
// Verwachte uitkomst:
// [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }]


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }
];

const born16thCentury = inventors.filter((inventor) => {
    return inventor.year >= 1500 && inventor.year <= 1600;
});
// uitkomst na loggen van born16thCentury:
// [
//     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }
// ]

