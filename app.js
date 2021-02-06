fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => getCountriesData(data))

function getCountriesData(data){
    console.log(data);
    const countries = document.getElementById('country-container');
    data.forEach(country => {
        // console.log(country);
        const countryInfo = `
            <h3 class="country-name">${country.name}</h3>
            <p>${country.capital}</p>
        `
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country';
        countryDiv.innerHTML = countryInfo;
        countries.appendChild(countryDiv);
    });
    
}