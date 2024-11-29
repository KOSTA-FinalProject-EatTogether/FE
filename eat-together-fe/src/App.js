import React from 'react';
import './css/App.css';
import Header from "./Header";
import Restaurant from "./components/restaurantDetails/RestaurantfixData";

    function App() {
        return (
            <div className="App">
                <Header/>
                <Restaurant/>
            </div>
        );
    }

export default App;