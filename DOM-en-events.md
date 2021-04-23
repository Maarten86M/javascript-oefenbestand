# DOM en events

## DOM (Document Object Model)
    Het Document Object Model beschrijft hoe browsers een model van 
    de HTML-pagina kunnen maken en hoe JavaScript toegang krijgt tot
    deze content. 

    Het wordt gebruikt om twee dingen te bereiken: 
    1. Een model van de HTML-pagina maken. Als de browser een HTML-pagina wil weergeven voor de gebruiker, 
    wordt er eerst een ‘model’ van gemaakt. Alle HTML elementen worden geïnterpreteerd als een soort boomstructuur: een DOM Tree.

    2. JavaScript toegang geven tot onderdelen op de pagina om ze, indien gewenst, aan te kunnen passen.
    We noemen de DOM een object model omdat de DOM onder de motorkap bestaat uit objecten. Dit object geeft ons 
    toegang tot methoden en properties om de DOM tree aan te passen, zonder dat we elementen aan ons 
    HTML-bestand hebben toegevoegd.

### Nodes 
    In de DOM praten we niet over HTML-elementen, maar over nodes. 
    Elk element, elk attribuut en elke tekst vormen een aparte node die aan elkaar gelinkt zijn.
    Alle nodes zijn uiteindelijk children van de overkoepelende document node.
    Wanneer je toegang wil krijgen tot de nodes in de DOM, begin je altijd bij de document node.

### Stappenplan (iets wilt aanpassen in de DOM Tree)
## 1
    1. Lokaliseer de plek van het element waar je mee wil werken en sla deze referentie op. 
    
    - Wellicht willen we een element toevoegen aan de <div> node. Om dit element te lokaliseren gebruiken we zijn unieke id attribuut:
```javascript
const container = document.getElementById("page");
```
    - Meerdere elementen tegelijkertijd: Wellicht willen we alle <li> nodes selecteren om een 
    aanpassing te maken. Dit kan op basis van hun class-atribuut en geeft een arat met nodes terug. 
```javascript
 const listItems = document.getElementsByClassName("ingrediënt");
```
## 2    
    2. Aanpassinge maken. 
    Wanneer je jouw element hebt gelokaliseerd kun je er aanpassingen op maken, of het 
    element gebruiken als "anker" om andere elementen in te plaatsen.
##
    - Een nieuwe node maken: Met onderstaand voorbeeld maken we een lege <p> bijv.
```javascript
const warningMessage = document.createElement(‘p’);
```
    - Een atrribuut toevoegen: JE kunt ieder gewenst attribuut toevoegen. 
    zoals bijv (id, een class, een src een alt etc). Als we op bovenstaande paragraag een class
    zouden willen plaatsen, doe je dat als volgt:
```javascript
warningMessage.setAttribute(‘class’, ‘warning’);
```
    - Een attribuut verwijderen: Dit doe je als volgt: 
```javascript
warningMessage.removeAttribute(‘class’);
```
    - Tekst toevoegen: De tekstinhoude van een node kunnen we via de textContent propert
    aanspreken, hier hebben we geen methode voor nodig. dus:
```javascript
warningMessage.textContent = “Hier wordt je dik van”;
```

    - Een elementen toevoegen aan de DOM Tree: Waneer we onze paragraaf node willen
    toevoegen aan onze <div>(wiens referentie we hadden opgeslagen in de variabele container)
    gebruiken we: 
```javascript
container.appendChild(warningMessage);
```
    
## Event Listeners
    Na het dynamisch injecteren van content, willen we ook reageren op acties van 
    gebruikers. Dat is immers wat onze pagina's interactief maakt. Deze interacties
    tussen de webpagina en de gebruiker gaat altijd op de volgende manier.
    1. Interactie triggert een event. (zoals een muisklik of invoeren van tekst). 
    2. Dit event triggert code (zoals een specifieke functie). 
    3. De code reageert op de gebruiker(door bijv. een aanpassing te maken in de DOM. 
##
    Om een event te triggeren, heb je een Event Listener Nodig. Een event Listener zet je op een 
    specifiek element, die vervolgens geduldig wacht tot er iets gebeurd. En wanneer dit 
    gebeurd zal deze event listener een functie tot uitvoeing laten brengen. 
    Je kunt bijvoorbeeld een click event op een button plaatsen, die elke keer dat de gebruiker op een knop klikt,
    een speicieke functie uitvoert. Zonder klik wordt er niets aangeroepen. 

### Soorten events: 
    - Keyboard Events = heeft een gebruiker een toets ingedrukt of losgelaten. 
    - Mouse Events = heeft de gebruiker iets met de muis gedaan. 
    - Focus Events = wordt een invoerveld gebruikt. 
    - Clipboard events = Is er iets gekopieerd, geplakt of geknipt. 
    - Form events = is het formulier verstuurd of gereset?
    - View events = is er iets met de weergave gebeurd?

### Het Event object     
    Iedere keer als er een event wordt getriggerd, zal de event listener een 
    Event object aanmaken met daarin alle informatie over wat er zojuist gebeurd is.
    Of je de informatie nou nodig hebt of niet, het event object wordt altijd (onder de motorkap) 
    doorgegeven aan de functie die tijdens dit event wordt aangeroepen.
    Als je deze informatie wil gebruiken, moet je in de functie declaratie aangeven dat dit event 
    mag worden opgevangen. Dit doe je door het event als parameter te verwachten. 
    Bij conventie noemen we deze parameter altijd e(van event) maar je mag deze parameter elke naam geven die je wil:

```javascript
const passwordInput = document.getElementById('user-password');

// we voegen de functienaam toe aan de event listener:
passwordInput.addEventListener('keyup', getPassword);

// laat de functie het event ontvangen onder de parameter e die automatisch wordt doorgegeven
function getPassword(e) {
 console.log(e);
}

```

### Argumenten meegeven. 
    Wanneer we de functies willen aanroepen op basis van een event, kan het natuurlijk ook 
    voorkomen dat we argumenten aan onze functie willen meegeven. Bijvoorbeeld bij een functie 
    die twee waardes bij elkaar optelt.

    Daarom hebben de makers van JavaScript hier een handigheidje voor bedacht: we wikkelen onze 
    functie-aanroep in een anonieme functie. Deze anonieme functie wacht netjes met zijn uitvoer 
    tot het event wordt getriggerd:

```javascript
button.addEventListener('click', () => {
 calculateSum(2,4);
});

```
