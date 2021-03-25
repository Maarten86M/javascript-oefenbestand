// Vergelijkingen

const hallo = "hallo";
const hoi = "hoi";
const vergelijking = hallo === hoi;
console.log(vergelijking);

const one = 1;
const two = 2;
const three = one === two; // false
console.log(three);

const een = 1;
const twee = 2;
const drie = twee > een;
console.log(drie); //true

const grade = 5.6;
const isPassed = grade >= 5.5;
console.log("student is passed:" + isPassed); // true


// alcohol check :D
const glasses = 4;
const percentage = 5;
const berekening = glasses * percentage;

if (berekening >= 20) {
    console.log("your drunk");
}
else {
    console.log("You can drive")
}

// testen
const vergelijking2 = 10 > 20;
console.log(vergelijking2);

const uitkomst = 10 !== 11;
console.log(uitkomst);

const woorden = "zoet" === "sappig";
console.log(woorden);

const raportcijfer = 9;
if (raportcijfer > 8){
    console.log("cum laude");
}

const isRaining = false;
const temperature = 11;

if (!isRaining && temperature >21){
    // console.log("je kunt een korte broek aan");
}

if (isRaining || temperature <12){
    // console.log("doe een jas aan");
}

// testen 2

const errorCode = 0;
switch (errorCode){
    case 0:
        console.log("geen water toevoer");
        break;
    case 1:
        console.log("Temperatuur te laag");
        break;
    case 2:
        console.log("koffiebonen op");
        break;
    case 3:
        console.log("afvalbak vol");
        break;
    case 4:
        console.log("geen druk");
        break;
    default:
        console.log("je hebt een probleem")
}


