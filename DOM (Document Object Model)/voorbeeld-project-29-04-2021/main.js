
let counterTest = 0;

const buttonTest = document.getElementById('button-test');
buttonTest.addEventListener("click", () => {
    const header = document.getElementById('header-test');
    header.innerText = counterTest;
    counterTest = counterTest +1;
})

const buttonTestTwo = document.getElementById('button-test-two');
buttonTestTwo.addEventListener("click", () => {
    // Nieuwe Paragraph toegevoegd wanneer er op de button wordt geklikt.
    const addTekst = document.createElement('p')    ;
    addTekst.innerText = "Je hebt geklikt";
    document.body.appendChild(addTekst);
    // Maar je kan de counter ook hergebruiken en doorlaten tellen met de tweede button
    const header = document.getElementById('header-test');
    header.innerText = counterTest;
    counterTest = counterTest +1;
})
