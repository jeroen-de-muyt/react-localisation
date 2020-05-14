import React from "react";
import PropTypes from 'prop-types';
import Moment from "react-moment";
import 'moment-timezone';
import convert from 'convert-units';
import localeConfig from "../locale/locale-config.json"

const MeasurementItem = ({value, unit, submissionTime, timezone, intlFormat}) =>
    <li>{value.toLocaleString(intlFormat)} {unit}, added at <Moment local={true} tz={timezone}
                                                                    format="lll">{submissionTime}</Moment></li>;

export default class MeasurementList extends React.Component {
    render() {
        const {measurements, timezone} = this.props;
        const displayUnit = localeConfig.locales[timezone].massUnit;
        return <ul className="measurement-list">
            {measurements.map((measurement) => <MeasurementItem key={measurement.key}
                                                                value={this.convertMeasurementValue(measurement.value, measurement.unit, displayUnit)}
                                                                unit={displayUnit}
                                                                timezone={timezone}
                                                                intlFormat={localeConfig.locales[timezone].intlFormat}/>)}
        </ul>;
    }

    convertMeasurementValue(value, originalUnit, conversionUnit) {
        return convert(value).from(originalUnit).to(conversionUnit);
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