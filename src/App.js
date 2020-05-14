import React from 'react';
import {Trans, withTranslation} from 'react-i18next'
import './App.css';
import MeasurementListing from "./components/measurement-listing";
import SetLocale from "./components/set-locale";
import LocaleConfiguration from "./components/locale-configuration";
import moment from "moment";
import 'moment-timezone';

const NavigationBar = ({onLocaleMenuClicked}) => <ul className="navbar">
    <li>App</li>
    <li onClick={e => onLocaleMenuClicked()}>Set locale</li>
</ul>;

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            locale: moment.tz.guess(),
            localeBarVisible: false
        }
        this.toggleLocaleMenu = this.toggleLocaleMenu.bind(this);
        this.onChangeLocale = this.onChangeLocale.bind(this);
    }

    render() {
        const {locale, localeBarVisible} = this.state;
        return <div className="wrapper">
            <NavigationBar onLocaleMenuClicked={this.toggleLocaleMenu}/>
            <LocaleConfiguration visible={false}/>
            <SetLocale visible={localeBarVisible} onLocaleChange={this.onChangeLocale} locale={locale}/>
            <div className="main-content">
                <h1><Trans>measurementList</Trans></h1>
                <MeasurementListing timezone={locale}/>
            </div>
        </div>;
    }

    toggleLocaleMenu() {
        const barVisible = this.state.localeBarVisible;
        this.setState({localeBarVisible: !barVisible});
    }

    onChangeLocale({value}) {
        moment.tz.setDefault(value);
        this.setState({locale: value})
    }
}

export default withTranslation()(App);