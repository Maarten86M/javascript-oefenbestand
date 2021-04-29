// promises

// voorbeeld uitleg:
//Promiseme dat je een taart bakt
// ... wacht tot de taart klaar is, en haal hem dan uit de oven
// ... wacht to de taart uit de oven is, en steek dan de verjaardagskaarsjes aan
// ... als de taart mislukt, stuur me dan een berichtje

// code ter om het uit te beelden:
// let op: dit is uiteraard geen werkend voorbeeld, maar slechts een illustratie

try {
    const gebakkenTaart = await taartBakkenPromise;
    const resultaat = await haalUitOven(gebakkenTaart);
    resultaat.steekKaarsjesAan();
} catch (e) {
    sendMessage("Taart is mislukt…");
}


// voorbeeld
taartBakkenPromise
    .then((gebakkenTaart) => {
        return haalUitOven(gebakkenTaart);
    }).then((resultaat) => {
    return resultaat.steekKaarsjesAan();
}).catch((e) => {
    return sendMessage("De taart is mislukt...");
});


//Om de verschillen te verduidelijken, vindt je hieronder een voorbeeld van het ophalen van data middels de oude en de nieuwe manier.
// Er wordt weer gebruik gemaakt van de REST Countries API.


// nieuwe manier
async function fetchDataNew() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        console.log(result);
    } catch (e) {
        console.error(e);
    }
}

fetchDataNew();

// oude manier
function fetchDataOld() {
    axios.get('https://restcountries.eu/rest/v2/all')
        .then((result) => {
            return console.log(result);
        }).catch((e) => {
        return console.error(e);
    });
}

fetchDataOld();