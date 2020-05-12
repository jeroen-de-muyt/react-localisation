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
            localeBarVisible: false
        }
        this.toggleLocaleMenu = this.toggleLocaleMenu.bind(this);
        this.onChangeLocale = this.onChangeLocale.bind(this);
    }

    render() {
        return <div className="wrapper">
            <NavigationBar onLocaleMenuClicked={this.toggleLocaleMenu}/>
            <SetLocale visible={this.state.localeBarVisible} locale={this.state.locale}
                       onLocaleChange={this.onChangeLocale}/>
            <div className="main-content">
                <h1><Trans>measurementList</Trans></h1>
                <MeasurementListing/>
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
}

export default withTranslation()(App);