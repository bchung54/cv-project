import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Personal from './components/Personal';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header contact={this.props.applicant.contact} />
				<Section title="Work Experience" experiences={this.props.applicant.experience.work} />
				<Section title="Education" experiences={this.props.applicant.experience.education} />
				<Personal title="Skills & Interests" personals={this.props.applicant.personals} />
			</div>
		);
	}
}

export default App;
