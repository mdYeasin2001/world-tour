fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => getCountriesData(data))

const getCountriesData =(data) => {
    // console.log(data);
    const countries = document.getElementById('country-container');
    data.forEach(country => {
        // console.log(country);
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
            <button onclick="getCountryDetails('${country.name}')" class="btn">Details</button>
        `
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        countryDiv.innerHTML = countryInfo;
        countries.appendChild(countryDiv);
    });
    
}

const getCountryDetails = country => {
    const url = `https://restcountries.eu/rest/v2/name/${country}`
    // console.log(country);
    fetch(url)
    .then(res => res.json())
    .then(data => showCountryDetails(data))
}
const showCountryDetails = detail => {
    // console.log(detail[0]);
    const showArea = document.getElementById('country-details');
    const countryDetail = `
        <img src="${detail[0].flag}" width="400px">
        <div>
        <h1>${detail[0].name}</h1>
        <h2>Capital: ${detail[0].capital}</h2>
        <p>Language: ${detail[0].languages[0].name}</p>
        <p>Area: ${detail[0].area}</p>
        <p>Population: ${detail[0].population}</p>
        <p>Region: ${detail[0].region}</p>
        <p>Subregion: ${detail[0].subregion}</p>
        </div>
    `
    showArea.innerHTML = countryDetail;
        
}