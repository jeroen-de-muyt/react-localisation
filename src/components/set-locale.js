import React, {Fragment} from "react";
import PropTypes from 'prop-types';
import localeConfig from "../locale/locale-config.json"

const TimezoneSelector = ({locale, activeLocale, onLocaleChange}) => <Fragment>
    <input type="radio" id={"locale-" + locale} name="locale" value={locale} checked={locale === activeLocale}
           onChange={e => onLocaleChange(e.target)}/>
    <label htmlFor={"locale-" + locale}>{locale}</label>
</Fragment>;

export default class SetLocale extends React.Component {

    render() {
        const {visible, locale, onLocaleChange} = this.props;
        if (visible) {
            return <div className="locale-bar">
                {Object.keys(localeConfig.locales).map(l => <TimezoneSelector locale={l}
                                                                              activeLocale={locale}
                                                                              onLocaleChange={onLocaleChange}/>)}
            </div>
        } else {
            return null;
        }
    }
}

SetLocale.propTypes = {
    visible: PropTypes.bool.isRequired,
    locale: PropTypes.string.isRequired,
    onLocaleChange: PropTypes.func.isRequired
}