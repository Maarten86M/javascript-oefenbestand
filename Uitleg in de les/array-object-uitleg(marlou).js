// ARRAYS

// create
const years = [2020, 2021, 2022];

//read
const lastYear = years[2]
console.log(lastYear);

// update:
years[2] = 2023;
console.log(years);

// length.
const lastIndex = years.length - 1;  // laat de laatste waarde zien in een array.
console.log(lastYear);

// spread operator
console.log(...years); // haalt de blokhaken weg bij het loggen.

// push
years.push(2024);
console.log("create", years); // voegt een waarde toe aan het einde.

// splice
years.splice(0,1,2019); // past de 1ste waarde aan.
console.log("create", years)

// delete
years.pop() // gooit de laatste waarde weg.
years.shift() // gooit de eerste waarde weg.
console.log("delete", years);
years.splice(1,2); // index, aantal items om weg te gooien vanaf die index. Dus begin op index 1, gooi 2 items weg.

//OBJECTEN.

// Create
const teacher = {
    name: "Malou",
    age: 27,
    "d-o-b": new Date ("1933-11-12")
};

// read
const name = teacher.name;
console.log(name);

// update.
teacher.name = "henk";
console.log(teacher);

teacher.city = "Tilburg"; // toevoegen van een nieuwe key & value.
console.log(teacher);

