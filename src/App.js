import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
      <div className="wrapper">
        <ul className="navbar">
          <li>App</li>
          <li>Set locale</li>
        </ul>
        <div className="main-content">
          <h1>Measurement list</h1>
          <ul className="measurement-list">
            <li>5 kg, added at 01-05-2020</li>
            <li>6 kg, added at 02-05-2020</li>
            <li>7 kg, added at 03-05-2020</li>
            <li>8 kg, added at 04-05-2020</li>
          </ul>
          <div className="measurement-add">
            <input type="text"></input>
				<select>
					<option>kg</option>
					<option>lbs</option>
				</select>
				<button>Add</button>
			</div>
		</div>
	</div>
  );
}

export default App;
