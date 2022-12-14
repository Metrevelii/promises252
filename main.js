'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  const html = `
  <article class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👫</span>${(
        +data.population / 1000000
      ).toFixed(1)} people</p>
      <p class="country__row"><span>🗣️</span>${data.languages[0].name}</p>
      <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
    </div>
  </article>
  `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1;
};

const getJSON = function (url, errorMsg = 'Something went wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json();
  });
};

// const request = fetch('https://restcountries.com/v2/name/eesti');
// console.log(request);

// 252 Consuming Promises

// const getCountryData = function(country) {
//     fetch(`https://restcountries.com/v2/name/${country}`).then(function (response) {
//         // Handled fullfilled promise.
//         // to read the data from body, we need to call JSON method.
//         console.log(response);
//         // new promise to be handled aswell
//         return response.json();
//     }).then(function(data) {
//         console.log(data);
//         renderCountry(data[0]);
//     });
// };

// SIMPLIFIED VERSION

// const getCountryData = function (country) {
//     // Country 1
//     fetch(`https://restcountries.com/v2/name/${country}`)
//     .then((response) => response.json())
//     .then(data => {
//         renderCountry(data[0]);
//         const neighbour = data[0].borders[0]

//         if (!neighbour) return;
//         // Country 2
//         return fetch(`https://restcountries.com/v2/alpha/${neighbour}`)
//     })
//     .then(response => response.json())
//     .then(data => renderCountry(data, 'neighbour')); 
// };

// getCountryData('georgia');
// getCountryData('austria');


// 262 Async/Await
// Fetching API without chaining Promises

const whereAmI = async function (country) {
    // inside async function we can have one or more await statements
    // ITS same as using .then(res => console.log(res)) after fetch
    const res = await fetch(`https://restcountries.com/v2/name/${country}`);
    console.log(res);

    const data = await res.json();
    console.log(data);
    renderCountry(data[0]);

}
whereAmI('portugal');

console.log('First')