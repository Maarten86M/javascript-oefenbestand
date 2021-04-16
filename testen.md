## testen met Jest. (stappenplan)

### Package.json
    1.  "npm init" = bij je nieuwe project type je
    2.  doorloop de vragen die stelt worden:
        "name": "De-naam-van-jouw-project-map",
        "version": "1.0.0",
        "description": "Dit project is een demo voor het gebruik van packages!",
        "main": "index.js",
        "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
         },
        "keywords": ["demo", "project", "novi", "hogeschool"],
         "author": "Piet pieters",
        "license": "ISC",
         "dependencies": {
         }
        }
    3. package.json is aangemaakt.

### installeer Jest (test)
    4. npm install jest --save-dev

### /node_modules 
    5. /node_modules toevoegen aan .gitignore, erg belangrijk! 
    Dit omdat de node modules map erg groot is. Soms wel enkele GB.

### toevoegen npx jest aan package.json
    6. npx jest toevoegen aan package.json (in de lijst test tussen " ".
    Dit doe je in de "test" onder "scripts"

### __tests__ & index.test.js aanmaken.
    7. __tests__(4x_) map aanmaken. 
    8. index.test.js aanmaken binnen deze map. (naam index mag je aanpassen)
    9. voeg binnen index toe: test('controleer of de test wel werkt', function (){
    console.log("ik wordt uitgevoerd!") } ) Console.log om te testen of het werkt.
    10. runnen van het test script. npm run test
    11. toevoegen "test:watch": "npx jest --watch" aan package.json (onder de andere test).
    12. runnen npm run test:watch

### testen van codes:
    13.Arrange : zet de waardes klaar waar je mee gaat testen
    14. Act: Voer de functie uit en geef de gecontroleerde waardes daaraan mee. 
    15. Assert: Maak een bewering over de verwachte uitkomst en vergelijk dit met de daadwerkelijke uitkomst doormiddel van de expect functie. Met daaraan een beweringsfunctie gekoppeld. zoals toEqual.

### Los koppelen van de testfile. 
    16. maak een appart bestand met een gewone.js extentie zoals index.js.
    17. plak de functies daarin en haal ze weg uit het testbestand. 
    18. exporteer de functies met modules.exports {naam: functieName}. 
    module.exports = {
    add: add,
    findByName: findByName,
    }

    19. importeer de functie met de rquire-functie die verwijst naar het bestand / pad waar de functies in staan. const { add ,findByName } =  require('../index'); . 
    20. bonus: schrijf het netter op door het te destructureren. 






### Gewone dependency & development depenency
    // gewone dependency
    npm install NAAM-VAN-DE-PACKAGE --save

    // development dependency
    npm install NAAM-VAN-DE-PACKAGE --save-dev

## Stappenplan. 
