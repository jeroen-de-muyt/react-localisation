import * as React from "react";
import PropTypes from 'prop-types';
import convert from 'convert-units';

const SelectUnit = ({unit, measure, onUnitChange}) => <select value={unit} onChange={e => onUnitChange(e.target)}>
    {convert().possibilities(measure).map(u => <option key={u} value={u}>{u}</option>)}
</select>

const UnitLabel = ({unit, onUnitEdit}) => <label onClick={e => onUnitEdit()}>{unit}</label>;

export default class UnitSelector extends React.Component {
    render() {
        const {editable, unit, measure, onUnitEdit, onUnitChange} = this.props;
        if (editable) {
            return <SelectUnit unit={unit} measure={measure} onUnitChange={onUnitChange}/>
        } else {
            return <UnitLabel unit={unit} onUnitEdit={onUnitEdit}/>
        }
    }
}
UnitSelector.propTypes = {
    editable: PropTypes.bool.isRequired,
    unit: PropTypes.string.isRequired,
    measure: PropTypes.string.isRequired,
    onUnitEdit: PropTypes.func.isRequired,
    onUnitChange: PropTypes.func.isRequired
}