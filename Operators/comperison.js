const x = "test";
const y = "test";

const z = 33;
const a = 22;

// ===  vergelijk twee waardes op waarde en type
const vergelijk1 = x === y; //true
console.log(vergelijk1);

// !=   vergelijkt twee waardes en kijkt of ze niet hetzelfde zijn.
const vergelijk2 = x != y; // false , zijn hetzelfde
console.log(vergelijk2);

// !==  vergelijkt twee waardes op ongelijkheid in waarde en type
const vergelijk3 = x !== y; // false, zijn beide hetzelfde.
console.log(vergelijk3);

// >    kijkt of het linker getal groter is dan het rechter getal
const vergelijk4 = z > a; // true
console.log(vergelijk4);

// >=   kijkt of het linker getal groter of gelijk is dan het rechter getal
const vergelijk5 = z >= a; // true , is groter.
console.log(vergelijk5);

// <    kijkt of het linker getal kleiner is dan het rechter getal
const vergelijk6 = z < a ; // false, is groter
console.log(vergelijk6);

// <=   kijkt of het linkr getal kleiner of gelijk is dan het rechter getalk.
const vergelijk7 = z <= a; // false
console.log(vergelijk7);