let counterTest = 0;

// Button One
const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener("click", () => {
    const header = document.getElementById('header-test');
    header.innerText = counterTest;
    counterTest = counterTest + 1;
})

// Button Two

const buttonTestTwo = document.getElementById('button-test-two');
buttonTestTwo.addEventListener("click", () => {
    // Nieuwe Paragraph toegevoegd wanneer er op de button wordt geklikt.
    const addTekst = document.createElement('p');
    addTekst.innerText = "Je hebt geklikt";
    document.body.appendChild(addTekst);
    // Maar je kan de counter ook hergebruiken en doorlaten tellen met de tweede button
    const header = document.getElementById('header-test');
    header.innerText = counterTest;
    counterTest = counterTest + 1;
})

// Button Three

// random background color function.

function randomBG() {
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let bgColor = 'rgb(' + x + ',' + y + ',' + z + ')';
    console.log(bgColor);
    // random background color
    document.body.style.background = bgColor;
}

// weergeven op de pagina.
const buttonTestThree = document.getElementById('button-test-three');
buttonTestThree.addEventListener("click", () => {
    randomBG();
})

// verwijderen van de vierkant.
const squareRemove = document.getElementById('square-remove');
squareRemove.addEventListener("click", () => {
    const squareToRemove = document.getElementById('square');
    squareToRemove.remove();
})



