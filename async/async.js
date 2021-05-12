const axios = require("axios");

async function getCrypto() {
    console.log("Lets make a request") (2)
    const response = await axios.get("https://api.coincap.io/v2/assets");
    console.log(response.status);(4)
    console.log("request is done")(5)
}
console.log("Hallow Students") (1)
getCrypto();
console.log("crypto is cool") (3)