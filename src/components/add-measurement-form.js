import React from "react";
import PropTypes from 'prop-types';
import localeConfig from "../locale/locale-config.json"
import UnitSelector from "./unit-selector";

export default class AddMeasurementForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: 1,
            unit: this.resolveUnit(),
            unitEditable: false
        };
        this.onUnitEdit = this.onUnitEdit.bind(this);
        this.updateUnit = this.updateUnit.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.locale !== prevProps.locale) {
            this.setState({unit: this.resolveUnit()});
        }
    }

    render() {
        const {amount, unit, unitEditable} = this.state;
        return <div className="measurement-add">
            <input type="number" value={amount} onChange={e => this.updateAmount(e.target)}/>
            <UnitSelector editable={unitEditable} unit={unit} measure="mass" onUnitEdit={this.onUnitEdit} onUnitChange={this.updateUnit}/>
            <button onClick={() => this.props.onMeasurementAdd(this.readMeasurement())}>Add</button>
        </div>;
    }

    resolveUnit() {
        return localeConfig.locales[this.props.locale].massUnit;
    }

    readMeasurement() {
        const {amount, unit} = this.state;
        return {
            value: amount,
            unit: unit
        }
    }

    updateAmount({value}) {
        this.setState({
            amount: value
        })
    }

    updateUnit({value}) {
        this.setState({
            unit: value,
            unitEditable: false
        })
    }

    onUnitEdit() {
        this.setState({unitEditable: true});
    }
}

AddMeasurementForm.propTypes = {
    onMeasurementAdd: PropTypes.func.isRequired,
    locale: PropTypes.string.isRequired
}