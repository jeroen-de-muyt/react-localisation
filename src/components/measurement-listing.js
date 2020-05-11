import React from "react";
import MeasurementList from "./measurement-list";
import AddMeasurementForm from "./add-measurement-form";

export default class MeasurementListing extends React.Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            measurements: []
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
        const newMeasurements = [
            ...this.state.measurements,
            {"value": value, "unit": unit}
        ];
        this.setState({measurements: newMeasurements})
    }
}