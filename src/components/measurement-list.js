import React from "react";
import PropTypes from 'prop-types';
import Moment from "react-moment";
import 'moment-timezone';

const MeasurementItem = ({value, unit, submissionTime, timezone}) => <li>{value} {unit}, added
    at <Moment local={true} tz={timezone} format="LLL">{submissionTime}</Moment></li>;

export default class MeasurementList extends React.Component {
    render() {
        const {measurements, timeZone} = this.props;
        return <ul className="measurement-list">
            {measurements.map((measurement) => <MeasurementItem key={measurement.key} {...measurement}
                                                                timezone={timeZone}/>)}
        </ul>;
    }
}

MeasurementList.propTypes = {
    measurements: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
        unit: PropTypes.string.isRequired,
        submissionTime: PropTypes.object.isRequired
    })).isRequired,
    timeZone: PropTypes.string.isRequired
}