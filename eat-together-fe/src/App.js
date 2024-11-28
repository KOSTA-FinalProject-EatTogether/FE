import React from 'react';
import Header from './Header';
import logo from './logo.svg';
import './App.css';
import Restaurant from './components/restaurantDetails/RestaurantfixData';

function App() {
  return (
    <div className="App">
      <Header />
      <Restaurant />
    </div>
  );
}

export default App;