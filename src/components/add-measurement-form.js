import React from "react";

export default class AddMeasurementForm extends React.Component {
    render() {
        return <div className="measurement-add">
            <input type="text"></input>
            <select>
                <option>kg</option>
                <option>lbs</option>
            </select>
            <button>Add</button>
        </div>;
    }
}