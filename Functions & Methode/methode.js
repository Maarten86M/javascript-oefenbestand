// verschil tussen functie en methode.

// 1. FUNCTIE
function congratulate() {
    console.log("Gefeliciteerd!");
}

// 2. METHODE, want hij is een property op het birthday object
const birthday = {
    congratulate: function () {
        console.log("Gefeliciteerd!");
    },
};
