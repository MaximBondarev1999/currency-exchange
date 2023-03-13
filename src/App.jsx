import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './component/header/Header';
import Home from './component/home/Home';


function App() {
  const [exchange, setExchange] = useState({ 'usd': 0, 'eur': 0, 'uah': 0 })

  useEffect(() => {
    axios.get('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
      .then((res) => {
        const data = res.data;
        const usd = data.find(currency => currency.cc === 'USD').rate.toFixed(2);
        const eur = data.find(currency => currency.cc === 'EUR').rate.toFixed(2);
        setExchange({ 'usd': usd, 'eur': eur, 'uah': '1' })
      });




  }, []);
  return (
    <div>
      <Header
        exchange={exchange}
      />
      <Home
        exchange={exchange}
      />
    </div>
  );
}

export default App;
