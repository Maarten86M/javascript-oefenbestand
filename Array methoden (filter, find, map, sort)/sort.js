// .sort() methode.
// handig om bijvoorbeeld een array te sorteren op basis van een gemiddelde cijfer.
// Sorteren gebeurt door het herhaaldelijk vergelijken van twee waardes: de huidige (a) met de vorige (b).

// Voorbeeld 1:
const numbers = [3, 1, 5, 4, 2];
// voorheen deden we dit op de volgende manier:
numbers.sort((a,b) =>{
    if (a>b){
        return 1;
    }
    if (a<b){
        return -1;
    }
    return 0;
}) // na loggen is de uitkomst: [ 1, 2, 3, 4, 5 ]
// Ook dit kan korter en duidelijker!

const numberSort = numbers.sort((a,b) =>{
    return a - b;
}); // uitkomst na loggen: [ 1, 2, 3, 4, 5 ]

// ook dit kan andersom:
const numberSortRev = numbers.sort((a,b) => {
    return b - a;
}) // uitkomst na loggen: [ 5, 4, 3, 2, 1 ]


// voorbeeld 2
// 4. Sorteer de uitvinders op geboortejaar, oplopend van oudste naar jongste uitvinder
// Verwachte uitkomst:
// [
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
// ]

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

const sortYears = inventors.sort((a,b) =>{
    return a.year - b.year;
}) // uitkomst is precies zoals bovenin de uitleg.


// voorbeeld 3
// 5. Sorteer de uitvinders op hoeveel jaren ze geleefd hebben, van langste leven naar kortste leven
// Verwachte uitkomst:
// [
// { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
// { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
// { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
// ]

const longLives = inventors.sort((a,b) =>{
    const aLongLives = a.passed - a.year; // eerste waarde om te vergelijken
    const bLongLives = b.passed - b.year; // tweede waarde om te vergelijken
    return bLongLives - aLongLives;
}) // uitkomst is precies zoals hierboven gevraagd.


// Dit kan je ook anders opschrijven: Vindt dit zelf duidelijker
const longLivesTwo = inventors.sort((a,b) => {
    return (b.passed - b.year) - (a.passed -a.year);
}) // precies dezelfde uitkomst maar de vergelijking is duidelijker.
