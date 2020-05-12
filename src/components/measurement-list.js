import React from "react";
import PropTypes from 'prop-types';

const MeasurementItem = ({value, unit}) => <li>{value} {unit}, added at 01-05-2020</li>;

export default class MeasurementList extends React.Component {
    render() {
        const {measurements} = this.props;
        return <ul className="measurement-list">
            {measurements.map((measurement) => <MeasurementItem key={measurement.key} {...measurement}/>)}
        </ul>;
    }
}

MeasurementList.propTypes = {
    measurements: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired
    })).isRequired
}