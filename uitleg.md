# lessen Javascript. 

### wat hebben we geleerd de afgelopen lessen. 

## Check Yourself before you wreck yourself.

    - 1 regel tegelijk schrijven
    - consistentie is belangrijker dan snelheid
    - doe voorspellingen
    - vaak testen
    - script runnen
    - console.log variabelen
    - console.log onbkende dingen

## Data types:

#### Primitives:

    
        Boolean
            - true
            - false
        Numbers
            -hoeveelheid
        String
            -tekst
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

    extra: verzameling van data. Je ziet overzichtelijk wat het is.

####
    Array vs Objects 
    Object zijn keys en values. Naam aan de waarde gegeven. 
    Array heeft indexes en values. De volgorde maakt hierbij niet uit. 


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
    <=      kijkt of het linkr getal kleiner of gelijk is dan het rechter getalk.
    
#### Assigment Operators:
    =  gebruik je bij var x = 4;

#### concatenation:
    +  gebruik je bijvoorbeld bij het loggen console.log (testOne + testTwo);

#### Logical operators:
    && en = conditie link en recht moeten waar zijn
    || of = checkt of link of rechts waar is. 
    ! niet

##Variables (data opslaan)
    Const
    Let
    Var

## Ingebouwde commando's
    console.log

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
    For
    While
    for(…of…)
    Do while

## Programma uitvoeren
    node myprogram.js   = 1malig runnen 
    nodemon myprogram.js = blijft checken naar de aanpassingen.



```javascript
for 
```