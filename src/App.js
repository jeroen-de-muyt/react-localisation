import React from 'react';
import './App.css';
import MeasurementList from "./components/measurement-list";
import AddMeasurementForm from "./components/add-measurement-form";

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
                <MeasurementList/>
                <AddMeasurementForm/>
            </div>
        </div>
    );
}

export default App;