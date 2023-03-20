const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res =>res.json())
    .then (data => displayCountries(data));
}

const displayCountries = countries =>{
    // console.log(countries);
    const countriesHTML = countries.map(country =>getCountryHtml(country));
    // console.log(allCountriesHtml);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(''); 
}

// option 1
// const getCountryHtml = country =>{
//     
//     const {name, flags} = country;
//     return`
//     <div class="country"> 
//     <h2>${name.common} </h2>
//     <img src="${flags.png}">
//     </div>
//     `}


// option 2
// const getCountryHtml = ({name, flags}) =>{
//     return`
//     <div class="country"> 
//     <h2>${name.common} </h2>
//     <img src="${flags.png}">
//     </div>
//     `
// }

const getCountryHtml = country =>{
    return`
    <div class="country"> 
    <h2>${country.name.common} </h2>
    <img src="${country.flags.png}">
    </div>
    `
}
loadCountries()