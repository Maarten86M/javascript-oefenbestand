const kleuren = "blauw";

if (kleuren === "green") {
    console.log("green");
} else if (kleuren === "yellow") {
    console.log("yellow");
} else if (kleuren === "purple") {
    console.log("purple")
} else {
    console.log("het is geen kleur")
}

// je kunt ook zaken vergelijken binnen een if statement.
const isRaining = false
const temperatuur = 22;

if(!isRaining && temperatuur >21){
    console.log("je kunt een korte broek aan")
}
if(isRaining || temperatuur <12){
    console.log("doe een jas aan!")
}

const grade = 8;
if (grade >= 5.5) {
    console.log("je bent geslaag")
}else {
    console.log("je bent gezakt")
};