// Data ophalen met Axios:
//voorbeeld code vanuit edhub:

async function fetchData() {
    try {
        const result = await axios.get('https://restcountries.eu/rest/v2/all');
        console.log(result);
    } catch(e) {
        console.error(e);
    }
}

fetchData();

// Omdat wij in onze applicatie alleen de data willen gebruiken, is het belangrijk om die bron
// specifiek aan te spreken. We maken daarom een nieuwe variabele met daarin alleen de data-array die 250 land-objecten bevat:

const result = await axios.get('https://restcountries.eu/rest/v2/all');
const countries = result.data;
