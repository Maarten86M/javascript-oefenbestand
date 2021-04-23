// // leeg voorbeeld ter info.
// const spaceExLaunch = {
//     //hier staat alle info in.
// }
//
// const missionName = spaceExLaunch.mission_name;
// const launchYear = spaceExLaunch.launch_year;
// const rocketName = spaceExLaunch.rocket.rocket_name;
//
// // Maar dat kan doormiddel van destructuring natuurlijk veel korter.
//     const { mission_name, launch_year, } = spaceExLaunch;


    // VOORBEELD 2

const objectName = {
    objone: "appel",
    objtwo: "peer",
    objthree: "perzik",
    objFour: "banaan",
    objSix: ["fiets", "auto", "trekker", "vliegtuig", "skelter"],
    objseven: {
        huisnummer: 7,
        woonplaats: "Amsterdam",
        age: 32,
    },
    objnine: "taart",
    objTen : "pizza"
}

const { objone , objseven:{huisnummer,woonplaats} } = objectName;
console.log(objone,huisnummer,woonplaats);