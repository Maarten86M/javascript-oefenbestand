# Novi Hogeschool (lessen Javascript) 

### Wat hebben we geleerd de afgelopen lessen. 

## Check Yourself before you wreck yourself.

    - 1 regel tegelijk schrijven
    - consistentie is belangrijker dan snelheid
    - doe voorspellingen
    - vaak testen
    - script runnen
    - console.log variabelen
    - console.log onbekende dingen

## Data types:

#### Primitives:

    
        Boolean
            - false
            - true
            - falsey (Al je deze waarde verandert naar een boolean krijg je true)
                * undefined
                * null
                * 0 (Getal nul)
                * Nan
                * '' (lege string)

            - truthy (Al je deze waarde verandert naar een boolean krijg je false) 
                * "hello World
                * -1
                * 5
                * " " (string met een spatie).
                * [] (lege array)
                * {} (lege object)
            
        Numbers
            -hoeveelheid
        String
            -tekst
            - template strings: ${tekst komt hier}
        Undefined
            -Oeps, dit is niks
        Null
            - dit is bewust niks.

#### Collections:

#### Arrays:
    - waarden (values)
    - volgorde -> 1ste, 2de, 3de element 
    - index (nummer)
    - 1ste element is array [0]


    - .length (deze array 3)
    - .push = iets toevoegen aan het eind van je array.
    - .pop = verwijderd de laatste waarde. 
    - .shift = verwijderd de eerste waarde.
    - .splice(1, 1). Hiermee kan je ook waarde verwijeren. Zolang je ze geen nieuwe waarde geeft. 
      Zie Hoofdstuk [### Array object]

    extra: je kunt hem blijven aanvullen. Je gebruikt het vaak als de volgorge uitmaakt

#### Objects:
    - const user = {id:1, job: "teacher", age: 32};
    - keys: id, job, age
    - waarden (values) 1 , teacher , 32
    - keys & waarden
    - functies (methode)
    - naam geven aan de waarden
    - {id:1 , job: "teacher", age:32};
    - toevoegen van keys & value. user.city = "Tilburg".  

    Oook dit werkt bij een object.
    - .push = iets toevoegen aan het eind van je array.
    - .pop = verwijderd de laatste waarde.
    - .shift = verwijderd de eerste waarde.
    - .splice(1, 1). Hiermee kan je ook waarde verwijeren. Zolang je ze geen nieuwe waarde geeft.

    extra: verzameling van data. Je ziet overzichtelijk wat het is.

####
    Array vs Objects 
    Object zijn keys en values. Naam aan de waarde gegeven. 
    Array heeft indexes en values. De volgorde maakt hierbij niet uit. 


#### Destructuring 
    - Object destructuring: const { id, job } = user
    - Array destructuring: const [node, dom ] = learingGoald



## Operators:
#### Arithemetic operators:
    +
    -
    /
    *
    %
    
Ook kan je een string koppelen op de volgende twee manieren
```javascript
const name = "world";

const newName = "hello " + name;
console.log(newName);

const newNameTwo =`hello ${name}`;
console.log(newNameTwo);
```



#### Comperison operators:
    ===     vergelijk twee waardes op waarde en type
    !==     vergelijkt twee waardes op ongelijkheid in waarde en type
    >       kijkt of het linker getal groter is dan het rechter getal
    <       kijkt of het linker getal kleiner is dan het rechter getal
    >=      kijkt of het linker getal groter of gelijk is dan het rechter getal
    <=      kijkt of het linker getal kleiner of gelijk is dan het rechter getal.
    
#### Assigment Operators: (toewijzen)
    =  gebruik je bij var x = 4;

#### concatenation:
    +  gebruik je bijvoorbeeld bij het loggen console.log (testOne + testTwo);

#### Logical operators:
    && en = conditie links en rechts moeten waar zijn
    || of = checkt of links of rechtss waar is. 
    ! niet

##Variables (data opslaan)
    Const   = als een waarde maar 1 keer gebruikt hoeft te worden. 
    Let     = als een waarde nog veranderd dient te worden. 
    Var     = gebruiken we eigenlijk niet meer. Oud variabel. 


## Conditonal statements
    If
    Else if
    Else
    Switch /case

## Loops
#### for loop
```javascript
const student = ["henk", "piet" ,"jan"];

for (let i = 0; i < student.length; i++){
    console.log(i)
}
```
    - .length = lengte van de loop gebruiken. 
    - 

## loops
toepassing: Bijvoorbeeld een functie herhalen. Code hergebruiken.

    For
    While
    for(…of…)
    Do while

## Programma uitvoeren
    - node myprogram.js   = 1malig runnen 
    - nodemon myprogram.js = blijft checken naar de aanpassingen.
    - testen (zie testen.md)
        - npx jest --watch
        - expect() , .toBe(), toEqual()
        - test("discription", () => test here.
        - folder __tests_ of file bla.test.js

        - Arrange = klaarzetten
        - Acts = iets uitvoeren
        - Assert = iets beweren , check uitvoeren. 

## Functions & Methode

### Functions

    - Why? Herbruikbaar, leesbaar, makkelijk aan te passen.
    - returning values : return a + b of return "hi"
    - aanroepen, functionName()
    - argumenten functionName("hi")
    - syntax (definitie)
        - keyword; function
        - name : functionName
        - parameter list : ( )
        - block { }
        - return

Onderstaand voorbeeld is een functions
```javascript
function congratulate() {
  console.log("Gefeliciteerd!");
}
```

Voorbeeldfunctie
```javascript
function area(width, length) {
    return width * length;
}

const room1 = area(4, 6);
const kitchen = area(12, 3);
const bathroom = area(22, 3);
const swimmingPool = area(9, 4);

const houseDescription = "De huiskamer is " + room1 + " m2 , de keuken is " + kitchen + "m2, de Badkamer " + bathroom + "m2, en het zwembad " + swimmingPool + "m2 groot!";
console.log(houseDescription);
```

### Arrow  function (anonieme functie).
zoals je onderstaand ziet is de arrowfunction heel kort. In het begin vooral de functie op de normale manier schrijven.

```javascript
const anoniemeFunction = (width, length) => width * length;
const room 1 = anoniemeFunction(2,5);
console.log(room1); // uitkomst = 10
```


### Methode (overkoepelend)
Dit is een methode, want hij is een property op het birthday object.
```javascript
const birthday = {
  congratulate: function () {
      console.log("Gefeliciteerd!");
  },
};
```




## ingebouwde JavaScript Objecten
    JavaScript bevat namelijk een groot aantal ingebouwde functies die veel voorkomende acties (zoals het toevoegen van een extra entry aan een array, of het verwijderen van onnodige spaties uit een string) vergemakkelijken. 

### Console
    console.log


### String object
    - .toUpperCase()    = verandert alles letters in Hoofdletters
    - .toLowerCase()    = verandert alles in kleine letters
    - .charAt(5)        = geeft een bepaalde letter (hierbij de 6de).
    - .indexOf("g")     = geeft het cijfer 6 terug
    - .lastIndexOf("st") = geeft de laatste plek waar het karakter voorkomt.
    - .substring(0,4) of (16) = geeft alle karakters tussen de meegegeven indexnummers.
    - .split("e")       = hakt de string in stukjes op basis van de conditie. Ook kan dit met een spatie .split("")
    - .trim();          = haalt spaties weg aan het begin en eind. 
    - .replace(" ", "-"); = Vervangt alle instanties van de gespecificeerde karakters met iets anders.
    - .includes("es");  = checkt of de string een specifiek karakter(s) bevat. geeft true or false.
### Math object
    - (Math.PI)         = gebruik je niet in de ronde haken. en bevat ht wiskundige getal Pi
    - Math.round(2.8)   = rond het getal af naar het dichtbijzijnde hele getal
    - Math.sqrt(16)     = geeft de wortel van een getal terug. hier dus 4
    - Math.ceil(7.12)   = rond een getal naar boven af 
    - Math.floor(7.82)  = rond een getal naar beneden af. 
    - Math.random()     = genereert een random getal tussen 0 & 1.bijv 0.55364624626
### Date object
zodra je een date instatie hebt gemaakt kunt je de verschillende methode toepassen. 
const date = new Date 1992, 11, 26). zie date-object.js

    - .getTime()        = geeft het aantal milliseconden dat verstreken zijn sinds de epoch. 
    - .getDay()         = geeft de dag van de week (0 -6).
    - .getHours()       = geeft het uur (0-23)
    - .getMinutes()       = geeft de minuten (0-59)
    - .getMonth()       = geeft de maanden (0-11)
    - .getSeconds()     = geeft het aantal seconden. 
    - .toDateString()   = geeft een engelse datum Sat Dec 26 1992

Vaak wil je een datum ook naar het nederlands herschrijven. I.p.v. de engelse weergave: sat Dec 26 1992. 

```javascript
// het nederlands maken van een datum !!!
const dateBirth = new Date(1992,11,26)

//nederlanse versie voluit.
const longOptions = {
    weekday: 'long',
    years: 'numeric',
    month: 'long',
    day: 'numeric'
};
const ducthDate = dateBirth.toLocaleDateString('nl-NL',longOptions);
console.log(ducthDate); // uitkomst geeft: zaterdag 26 december
```

### Array object
    De meest gangbare worden hier uitgelegd: 
    - .concrat()         = voegt twee arrays samen. 
    - .includes()        = checkt of een van de items in de array een bepaalde waarde bevat, zoals bijv lasagne of 45.
    - .indexOf()         = checkt het indexnummer van het item in de array met een bepaalde waarde
    - .join()           = Maakt een string van alle items in de array door ze achter elkaar te plakken. Wanneer je ze een argument geeft wordt deze erin geplakt " " of "-".
    - .push()           = Pusht een nieuwe item, ofwel: voegt een item toe aan het einde van een array.
    - .reverse()        = draait de volgorde van de array om. 
    - .pop()            = verwijderd laatste item in een array
    - .shift()          = verwijdert eerste item in de array.
    - .slice()          = maakt een referencieloze kopie van een deel van de array. Dit betekend dat de originele array niet wordt aangepast. Dit kan handig zijn om soms niet de originele array wil aanpassen.
    -. splice()         = voegt toe, vervangt of verwijderd. (1) indexnummer (2)hoeveel items, (3) wat er toegevoegd dient te worden.

## Scope
    - isolate parts of your program, be able to reuse names. 
    - local Scope
    - Global Scope 
    - dont use Var (nog respect voor if for loop scope)
    - reference error (often the result scope issue)

    Omschrijving: zorgt er voor dat je je programma kan opdelen in meerder stukken. Dus je kan meerdere keren dezelfde naam gebruiken. 
    Omdat ze in een andere scope zitten. { } . 
    
## Libaries / packages 
    - npm
    - npm init
    - package.json
    - npm install
    - require
    - modulo.exports

    - packages zijn een verzameling van code van iemand anders. 


## Extra begrippen: 
    - callback = Een callback is een functie die wordt aangeroepen door een andere functie, waarbij deze als parameter meegegeven wordt. In deze callback beschrijven we, 
    net als bij een for-loop, wat voor acties we willen uitvoeren tijdens elke loop