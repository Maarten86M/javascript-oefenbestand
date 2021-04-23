//
// const users = [
//     {email: "rein@rein.com"},
//     {email: "kelley@kelly.com"},
//     {email: "miriam@me.com"}
// ];
// // tweede gebruiker
// const kelly = users[1];
// //derde gebruiker
// const miriam = users[2];
//
// console.log(kelly);
// console.log(miriam);
//
// // destructuring
//
// const [ rein, kelley, miriam] = users;
// console.log(rein,kelley,miriam);


// voorbeeld 2

const schoolDetails = [
    {
        name: "henk",
        age: 32,
        num: 22
    },
    {
        name: "Piet",
        age: 18,
        num: 21
    },
    {
        name: "Jan",
        age: 33,
        num: 23
    }
];

const [,, drie] = schoolDetails;
console.log(drie);

