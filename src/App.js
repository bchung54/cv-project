import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Section, { Personal } from './components/Section';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contact: this.props.applicant.contact,
			experience: this.props.applicant.experience,
			personals: this.props.applicant.personals
		};
	}
	render() {
		const { contact, experience, personals } = this.state;
		return (
			<div className="App">
				<Header contact={contact} />
				<Section title="Work Experience" experience={experience.work} />
				<Section title="Education" experience={experience.education} />
				<Personal
					title="Skills & Interests"
					skills={personals.skills}
					interests={personals.interests}
				/>
			</div>
		);
	}
}

export default App;
