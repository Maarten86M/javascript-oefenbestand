// .find() methode.
//De find() methode geeft de eerste waarde terug die voldoet aan de conditie die gesteld is.
// Dit is enkel handig wanneer je specifiek opzoek bent naar iemand zijn gegevens.

// voorbeeld 1:
const studentsSchool = [
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

const findStudent = studentsSchool.find((student) => {
    return student.name === 'Marieke Smit';
}) // uitkomst na loggen: { name: 'Marieke Smit', course: 'FSD Bootcamp', averageGrade: 7.5 }



// voorbeeld 2:
// 6. Vind de gegevens over de uitvinder wiens achternaam 'Edison' is.
// Verwachte uitkomst: { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }

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

const findEdison = inventors.find((inventor) => {
    return inventor.last === "Edison";
}) // uitkomst na loggen: { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }
