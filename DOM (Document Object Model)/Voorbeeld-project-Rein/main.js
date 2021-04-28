
// element selecteren
const header = document.getElementById('bigTittle');

// elementen zijn zoals objecten.
// properties:
console.log(header.innerText);
console.log(header.id);
console.log(header.className);

// change properties.
header.innerText = " Youve got hacked";
// nu zie je op de browser dat de tekst is veranderd.

// calling methods on elements.
// header.remove();

// creating new elements from scratch.
const newText = document.createElement('p');
newText.innerText = "Im a New Paragraph!!";
document.body.appendChild(newText);
console.log(newText);

// responding to events.
// Select the button
// 1. add id to the button (html)
// 2. select the button.
let counter =  0;
const button = document.getElementById('best-button');
// listen to click events on the button
// handle the click event(pass, a function).
button.addEventListener('click', () => {
    console.log("handle it");
    const header = document.getElementById('bigTittle')
    header.innerText = counter;
    counter = counter + 1;
})
