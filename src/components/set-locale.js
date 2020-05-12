import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const LocaleSelector = ({locale, activeLocale, onChangeLocale}) => <Fragment>
    <input type="radio" id={"locale-" + locale} name="locale" value={locale} checked={locale === activeLocale}
           onChange={e => onChangeLocale(e.target)}/>
    <label htmlFor={"locale-" + locale}>{locale}</label>
</Fragment>;

const TimezoneSelector = ({timezone, activeTimezone, onChangeTimezone}) => <Fragment>
    <input type="radio" id={"locale-" + timezone} name="timezone" value={timezone} checked={timezone === activeTimezone}
           onChange={e => onChangeTimezone(e.target)}/>
    <label htmlFor={"locale-" + timezone}>{timezone}</label>
</Fragment>;


export default class SetLocale extends React.Component {

    render() {
        const {visible, locale, onLocaleChange, timezone, onTimezoneChange} = this.props;
        if (visible) {
            return <div className="locale-bar">
                <div>
                    <LocaleSelector locale="en" activeLocale={locale} onChangeLocale={onLocaleChange}/>
                    <LocaleSelector locale="nl" activeLocale={locale} onChangeLocale={onLocaleChange}/>
                </div>
                <div>
                    <TimezoneSelector timezone="Asia/Tokyo" activeTimezone={timezone}
                                      onChangeTimezone={onTimezoneChange}/>
                    <TimezoneSelector timezone="Europe/Brussels" activeTimezone={timezone}
                                      onChangeTimezone={onTimezoneChange}/>
                    <TimezoneSelector timezone="Europe/London" activeTimezone={timezone}
                                      onChangeTimezone={onTimezoneChange}/>
                    <TimezoneSelector timezone="US/Pacific" activeTimezone={timezone}
                                      onChangeTimezone={onTimezoneChange}/>
                </div>
            </div>
        } else {
            return null;
        }
    }
}

SetLocale.propTypes = {
    visible: PropTypes.bool.isRequired,
    locale: PropTypes.string.isRequired,
    timezone: PropTypes.string.isRequired,
    onLocaleChange: PropTypes.func.isRequired,
    onTimezoneChange: PropTypes.func.isRequired
}