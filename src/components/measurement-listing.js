import React from "react";
import MeasurementList from "./measurement-list";
import AddMeasurementForm from "./add-measurement-form";

export default class MeasurementListing extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            measurements: [],
            lastKey: 0
        }
        this.onMeasurementAdded = this.onMeasurementAdded.bind(this);
    }

    render() {
        return <>
            <MeasurementList measurements={this.state.measurements}/>
            <AddMeasurementForm onMeasurementAdd={this.onMeasurementAdded}/>
        </>;
    }

    onMeasurementAdded({value, unit}) {
        const {measurements, lastKey} = this.state;
        const newMeasurements = [
            ...measurements,
            {"key": lastKey + 1, "value": value, "unit": unit}
        ];
        this.setState({measurements: newMeasurements, lastKey: lastKey + 1})
    }
}