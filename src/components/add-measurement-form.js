import React from "react";
import PropTypes from 'prop-types';
import convert from 'convert-units';

export default class AddMeasurementForm extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            amount: 1,
            unit: "kg"
        };
    }

    render() {
        console.log(convert().measures())
        console.log(convert().list("mass"))
        const {amount} = this.state;
        return <div className="measurement-add">
            <input type="number" value={amount} onChange={e => this.updateAmount(e.target)}/>
            <select onChange={e => this.updateUnit(e.target)}>
                <option>kg</option>
                <option>lb</option>
            </select>
            <button onClick={() => this.props.onMeasurementAdd(this.readMeasurement())}>Add</button>
        </div>;
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
            unit: value
        })
    }
}

AddMeasurementForm.propTypes = {
    onMeasurementAdd: PropTypes.func.isRequired
}