import React from 'react';
import {Trans, withTranslation} from 'react-i18next'
import './App.css';
import MeasurementListing from "./components/measurement-listing";
import SetLocale from "./components/set-locale";

const NavigationBar = ({onLocaleMenuClicked}) => <ul className="navbar">
    <li>App</li>
    <li onClick={e => onLocaleMenuClicked()}>Set locale</li>
</ul>;

class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            locale: "en",
            timezone: "Europe/Brussels",
            localeBarVisible: false
        }
        this.toggleLocaleMenu = this.toggleLocaleMenu.bind(this);
        this.onChangeLocale = this.onChangeLocale.bind(this);
        this.onChangeTimezone = this.onChangeTimezone.bind(this);
    }

    render() {
        const {locale, timezone, localeBarVisible} = this.state;
        return <div className="wrapper">
            <NavigationBar onLocaleMenuClicked={this.toggleLocaleMenu}/>
            <SetLocale visible={localeBarVisible} locale={locale}
                       onLocaleChange={this.onChangeLocale} onTimezoneChange={this.onChangeTimezone}
                       timezone={timezone}/>
            <div className="main-content">
                <h1><Trans>measurementList</Trans></h1>
                <MeasurementListing timezone={timezone}/>
            </div>
        </div>;
    }

    toggleLocaleMenu() {
        const barVisible = this.state.localeBarVisible;
        this.setState({localeBarVisible: !barVisible});
    }

    onChangeLocale({value}) {
        this.setState({locale: value})
        this.props.i18n.changeLanguage(value)
    }

    onChangeTimezone({value}) {
        this.setState({timezone: value})
    }
}

export default withTranslation()(App);