import axios from 'axios';

const API_KEY = 'https://api.monobank.ua/bank/currency';
const API_URL = `https://api.exchangeratesapi.io/latest?access_key=${API_KEY}`;

function getExchangeRates() {
   return axios.get(API_URL)
      .then(response => response.data)
      .catch(error => console.log(error));
}

export default getExchangeRates;