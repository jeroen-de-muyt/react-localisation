import * as React from "react";
import localeConfig from "../locale/locale-config.json"
import PropTypes from 'prop-types';

const UnitLabel = ({selectedUnit}) => <label>{selectedUnit}</label>;

const LocaleConfigurationTable = () => <table>
    <thead>
    <tr>
        <th>Locale</th>
        <th>Mass unit</th>
        <th>Length unit</th>
    </tr>
    </thead>
    <tbody>
    {Object.keys(localeConfig.locales).map(locale => <tr>
        <td>{locale}</td>
        <td><UnitLabel selectedUnit={localeConfig.locales[locale].massUnit}/></td>
        <td><UnitLabel selectedUnit={localeConfig.locales[locale].lengthUnit}/></td>
    </tr>)}
    </tbody>
</table>;

export default class LocaleConfiguration extends React.Component {
    render() {
        if (!this.props.visible) {
            return null;
        }
        return <div className="locale-bar">
            <div>
                <label>Back-end locale</label>
                <label>{localeConfig.backendLocale}</label>
            </div>
            <div><LocaleConfigurationTable/></div>
        </div>
    }
}

LocaleConfiguration.propTypes = {
    visible: PropTypes.bool.isRequired
}