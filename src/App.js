import './App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Section from './components/Section';
import Personal from './components/Personal';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			contact: this.props.applicant.contact,
			experience: this.props.applicant.experience,
			personals: this.props.applicant.personals
		};

		this.handleHeaderEdit = this.handleHeaderEdit.bind(this);
		this.handleExperienceEdit = this.handleExperienceEdit.bind(this);
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

	handleExperienceEdit(e, label, index) {
		let category;
		label.includes('work') ? (category = 'work') : (category = 'edu');
		const toEdit = e.target.name;
		const text = e.target.value;
		let expCopy = { ...this.state.experience };
		let expToEdit;
		if (category === 'work') {
			expToEdit = expCopy.work[index];
		} else {
			expToEdit = expCopy.education[index];
		}

		switch (toEdit) {
			case 'placeName':
				expToEdit.placeName = text;
				break;
			case 'subTitle':
				expToEdit.subTitle = text;
				break;
			case 'timePeriod':
				const timeArray = text.split(' ');
				expToEdit.timePeriod = {
					from: {
						month: timeArray[0],
						year: timeArray[1]
					},
					to: {
						month: timeArray[3],
						year: timeArray[4]
					}
				};
				break;
			case 'location':
				const locArray = text.split(', ');
				expToEdit.location = {
					city: locArray[0],
					state: locArray[1]
				};
				break;
			default:
				const itemIndex = parseInt(toEdit.split('-')[1]);
				expToEdit.items[itemIndex] = text;
				break;
		}
		this.setState({
			experience: expCopy
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
				<Section
					title="Work Experience"
					experiences={experience.work}
					onExperienceTextChange={this.handleExperienceEdit}
				/>
				<Section
					title="Education"
					experiences={experience.education}
					onExperienceTextChange={this.handleExperienceEdit}
				/>
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
