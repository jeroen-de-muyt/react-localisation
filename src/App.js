import React from 'react';
import {Trans, withTranslation} from 'react-i18next'
import './App.css';
import MeasurementListing from "./components/measurement-listing";

const NavigationBar = () => <ul className="navbar">
    <li>App</li>
    <li>Set locale</li>
</ul>;

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            value: "en"
        }
    }

    render() {
        return <div className="wrapper">
            <NavigationBar/>
            <div className="main-content">
                <h1><Trans>measurementList</Trans></h1>
                <MeasurementListing/>
            </div>
        </div>;
    }
}

export default withTranslation()(App);