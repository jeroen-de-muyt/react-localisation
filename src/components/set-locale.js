import React, {Fragment} from "react";
import PropTypes from 'prop-types';

const LocaleSelector = ({locale, activeLocale, onChangeLocale}) => <Fragment>
    <input type="radio" id={"locale-" + locale} name="locale" value={locale} checked={locale === activeLocale}
           onChange={e => onChangeLocale(e.target)}/>
    <label htmlFor={"locale-" + locale}>{locale}</label>
</Fragment>;


export default class SetLocale extends React.Component {

    render() {
        const {visible, locale, onLocaleChange} = this.props;
        if (visible) {
            return <div className="locale-bar">
                <LocaleSelector locale="en" activeLocale={locale} onChangeLocale={onLocaleChange}/>
                <LocaleSelector locale="nl" activeLocale={locale} onChangeLocale={onLocaleChange}/>
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