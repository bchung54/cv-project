import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header
					name="John Doe"
					currTitle="Janitor"
					email="blah@blah.com"
					phone="(555)555-555"
					location="London, UK"
				/>
				<Section title="Work Experience" />
				<Section title="Education" />
				<Section title="Skills & Interests" />
			</div>
		);
	}
}

export default App;
