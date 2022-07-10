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

		this.handleHeaderEdit = this.handleHeaderEdit.bind(this);
		this.handlePersonalEdit = this.handlePersonalEdit.bind(this);
	}

	handleHeaderEdit(label, text) {
		let contactCopy = { ...this.state.contact };
		switch (label) {
			case 'name':
				contactCopy.name = text;
				break;
			case 'currTitle':
				contactCopy.currTitle = text;
				break;
			case 'email':
				contactCopy.email = text;
				break;
			case 'phone':
				contactCopy.phone = text;
				break;
			case 'location':
				contactCopy.location = text;
				break;
			default:
				break;
		}
		this.setState({
			contact: contactCopy
		});
	}

	handlePersonalEdit(label, arr) {
		let personalsCopy = { ...this.state.personals };
		switch (label) {
			case 'skills':
				personalsCopy.skills = arr;
				break;
			case 'interests':
				personalsCopy.interests = arr;
				break;
			default:
				break;
		}
		this.setState({
			personals: personalsCopy
		});
	}
	render() {
		const { contact, experience, personals } = this.state;
		return (
			<div className="App">
				<Header contact={contact} onHeaderTextChange={this.handleHeaderEdit} />
				<Section title="Work Experience" experience={experience.work} />
				<Section title="Education" experience={experience.education} />
				<Personal
					title="Skills & Interests"
					personals={personals}
					onPersonalTextChange={this.handlePersonalEdit}
				/>
			</div>
		);
	}
}

export default App;
