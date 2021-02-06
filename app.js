fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => getCountriesData(data))

function getCountriesData(data){
    // console.log(data);
    const countries = document.getElementById('country-container');
    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        // console.log(country.name);
        const countryDiv = document.createElement('div');
        const h3 = document.createElement('h3');
        h3.innerText = country.name;
        const p = document.createElement('p');
        p.innerText = country.capital;
        countryDiv.appendChild(h3);
        countryDiv.appendChild(p);
        countries.appendChild(countryDiv);
        
        
    }
}