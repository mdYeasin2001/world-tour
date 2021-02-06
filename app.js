fetch('https://restcountries.eu/rest/v2/all')
.then(response => response.json())
.then(data => getCountriesData(data))

function getCountriesData(data){
    // console.log(data);
    const ul = document.getElementById('country-container');
    for (let i = 0; i < data.length; i++) {
        const country = data[i];
        // console.log(country.name);
        const li = document.createElement('li');
        li.innerText = country.name;
        ul.appendChild(li);
        
    }
}