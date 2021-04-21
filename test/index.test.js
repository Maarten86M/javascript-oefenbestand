// voorbeeld van een test

// Arrange
// Assert
// Act

// functie geimporteerd vanuit functie.js
const { testFunction } = require('../test/functie');

test("return a value when two nummers make this sum", function () {
    // Arrange
    const number1= 5;
    const number2 = 10;
    //Act
    const sum = testFunction(number1, number2);
    //Assert
    // geef terug wat het zou moeten zijn. Dus het antwoord in sum.
    expect(sum).toBe(15);
})

// jest is niet geinstalleerd in dit bestand.