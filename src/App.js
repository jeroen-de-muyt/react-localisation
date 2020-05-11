import React from 'react';
import './App.css';
import MeasurementListing from "./components/measurement-listing";

const NavigationBar = () => <ul className="navbar">
    <li>App</li>
    <li>Set locale</li>
</ul>;

function App() {
    return (
        <div className="wrapper">
            <NavigationBar/>
            <div className="main-content">
                <h1>Measurement list</h1>
                <MeasurementListing/>
            </div>
        </div>
    );
}

export default App;