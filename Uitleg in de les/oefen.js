const objectOne = {
    name: "Henk",
    age: 33,
    lengte: 1.73,
    birth: "06-10-2029",
    hobbys: ["voetbal", "tennis", "varen", "developen"],
    uitzien: {
        ogen: "blauw",
        haar: "blond",
        oren: 2
    }
}


const lastIndex = objectOne.hobbys.length - 1;
console.log(lastIndex)
console.log(objectOne.hobbys[lastIndex]);