
const users = [
    {email: "rein@rein.com"},
    {email: "kelley@kelly.com"},
    {email: "miriam@me.com"}
];
// tweede gebruiker
const kelly = users[1];
//derde gebruiker
const miriam = users[2];

console.log(kelly);
console.log(miriam);

// destructuring

const [ rein, kelley, miriam] = users;
console.log(rein,kelley,miriam);
