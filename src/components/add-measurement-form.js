import React from "react";
import PropTypes from 'prop-types';
import localeConfig from "../locale/locale-config.json"

export default class AddMeasurementForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: 1
        };
    }

    render() {
        const {amount} = this.state;
        return <div className="measurement-add">
            <input type="number" value={amount} onChange={e => this.updateAmount(e.target)}/>
            <label>{this.getUnit()}</label>
            <button onClick={() => this.props.onMeasurementAdd(this.readMeasurement())}>Add</button>
        </div>;
    }

    getUnit() {
        return localeConfig.locales[this.props.locale].massUnit;
    }

    readMeasurement() {
        const {amount} = this.state;
        return {
            value: amount,
            unit: this.getUnit()
        }
    }

    updateAmount({value}) {
        this.setState({
            amount: value
        })
    }
}

AddMeasurementForm.propTypes = {
    onMeasurementAdd: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
}