import React from "react";
import PropTypes from 'prop-types';
import Moment from "react-moment";
import 'moment-timezone';
import convert from 'convert-units';

const MeasurementItem = ({value, unit, submissionTime, timezone}) => <li>{convert(value).from(unit).to('kg')} kg, added
    at <Moment local={true} tz={timezone} format="lll">{submissionTime}</Moment></li>;

export default class MeasurementList extends React.Component {
    render() {
        const {measurements, timezone} = this.props;
        return <ul className="measurement-list">
            {measurements.map((measurement) => <MeasurementItem key={measurement.key} {...measurement}
                                                                timezone={timezone}/>)}
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
    timezone: PropTypes.string.isRequired
}