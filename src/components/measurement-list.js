import React from "react";


export default class MeasurementList extends React.Component {
    render() {
        return <ul className="measurement-list">
            <li>5 kg, added at 01-05-2020</li>
            <li>6 kg, added at 02-05-2020</li>
            <li>7 kg, added at 03-05-2020</li>
            <li>8 kg, added at 04-05-2020</li>
        </ul>;
    }
}