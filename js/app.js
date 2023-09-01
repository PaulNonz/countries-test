const fetchCountryApi = () => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}


const displayCountries = (countries) => {
        console.log(countries);
        const eachCountryHtml = countries.map(country => getCountry(country))
        const countryContainer = document.getElementById('countries')
        countryContainer.innerHTML = eachCountryHtml
}


const getCountry = country =>{
        return `
        <div class="card" id="card">
                <div class="img-container">
                        <img src="${country.flags.png}" alt="" srcset="" class="card-img">
                </div>                        
                <div class="card-content" id="card-text">
                        <h3 class="country-title">${country.name.common}</h3>
                        <p class="population"><span id="make-bold">Population:</span>${country.population}</p>
                        <p class="region"><span id="make-bold">Region:</span> ${country.region}</p>
                        <p class="capital"><span id="make-bold">Capital:</span>${country.capital}</p>
                </div>
        </div>
`
}

fetchCountryApi()