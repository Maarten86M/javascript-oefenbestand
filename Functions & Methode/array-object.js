// concat() //  voegt 2 arrays samen
const array1 = [2,3];
const array2 = [4,5,6];

const result1 = array1.concat(array2);
console.log(result1); // geeft [ 2, 3, 4, 5, 6 ]

// includes () // bevat iets.
const array3 = [4,5,6];
const result2 = array3.includes(5)
console.log(result2); // geeft een uitkomst van 2

// indexOf() // check het indexnummer
const ingredienten = ["kaas", "appel" , "spek"];
const result3 = ingredienten.indexOf("kaas");
console.log(result3); // geeft het nummer 0, de plaatst van kaas

// join() // plakt alles achter elkaar met eventueel een een argument zoals " " of "-".
const words = ["hoe", "gaat", "het", "ermee"];
const result4 = words.join(" "); // geeft hoe gaat het ermee
const result5 = words.join("-"); // geeft hoe-gaat-het-ermee
console.log(result5);

// push() // pusht een nieuw item aan het einde van een array.

const array4 = ["een", "twee", "drie", "vier"];
const result6 = array4.push("vijf");
console.log(array4); // uitkomst [ 'een', 'twee', 'drie', 'vier', 'vijf' ]

// reverse() // omdraaien van een array.
const array5 = [1,2,3,4,5];
const result7 = array5.reverse();
console.log(result7);// uitkomst [ 5, 4, 3, 2, 1 ]

// .pop() // verwijderd laatste item in een array
const array6 = [1,2,3,4,5];
const result8 = array6.pop();
console.log(array6);

// .shift() // verwijderd de 1ste in array
const array7 = [1,2,3,4,5];
array7.shift();
console.log(array7); // uitkomst [ 2, 3, 4, 5 ]

// .slice() // kopieert een bepaald gedeelte.
const array8 = ["kaas", "ham", "brood", "boter"];
const result9 = array8.slice(); // volledige kopie van array
const result10 = array8.slice(1)// [ 'ham', 'brood', 'boter' ] kopie vanaf index 1
const result11 = array8.slice(0,2);[ 'kaas', 'ham' ]
console.log(result11);

//.splice() , voegt toe, vervangt of verwijderd een item op basis van de index.
const array9 = ["fiets", "auto", "trein", "skelter"];

        // positie: 1, verwijderen:0, toevoegen: "geel"
array9.splice(1,0,"geel");
console.log(array9); // uitkomst :[ 'fiets', 'geel', 'auto', 'trein', 'skelter' ]
        // vervangen met spice.
        // positie:1 verwijderen:1, toevoegen "kaas"
const array10 = ["groen", "geel", "rood", "blauw"];
array10.splice(1,1,"kaas");
console.log(array10);// uitkomst: [ 'groen', 'kaas', 'rood', 'blauw' ]

        // verwijderen met splice:
        // positie:2, verwijderen:1, toegoeven 0.
const array11 = ["red", "yellow", "bleu", "purple"];
array11.splice(2,1);
console.log(array11); // uitkomst : [ 'red', 'yellow', 'purple' ]
