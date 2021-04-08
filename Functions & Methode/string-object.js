const string = "Hallo";
string.toUpperCase(); // geeft "HALLO"

const stringOne = "Novi Hogeschool";
stringOne.toLowerCase(); // geeft "novi hogeschool"

const stringTwo = "abcdefghijk";
stringTwo.charAt(5) // geeft de letter f

const stringThree = "abcdefghijklmn";
stringThree.indexOf("g"); // geeft nr 6;

const stringFour = "oost west thuis best";
stringFour.lastIndexOf("st") // geeft plaats 18.

const stringFive = "Oost west thuis best";
stringFive.substring(1,4) // geeft oost

const stringSix = " Oost west thuis best";
stringSix.split("e"); // geeft "Oost w", "st thuis b", "st "

const stringSeven = "Oost West Thuis Best";
stringSeven.split(" "); // geeft ['Oost', 'West, 'Thuis', 'Best']

const stringEight = "Oost West Thuis Best ";
stringEight.trim(); // haalt spaties weg aan het begin en eind.

const stringNine = "Oost West Thuis Best ";
stringNine.replace(" ", "-"); // geeft uitkomst Oost-West

const stringTen = "Oost West thuis best ";
stringTen.includes("es"); // geeft als uitkomst true.