fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => getCountriesData(data))

function getCountriesData(data){
    console.log(data);
    const countries = document.getElementById('country-container');
    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        const countryDiv = document.createElement('div');

        const countryInfo = `
            <h3>${country.name}</h3>
            <p>${country.capital}</p>
        `
        countryDiv.innerHTML = countryInfo;
        countries.appendChild(countryDiv);
        
        
        
    }
}