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
	}

	handleHeaderEdit(label, newValue) {
		let copy = {...this.state.contact};
		switch (label) {
			case 'name':
				copy.name = newValue;
				break;
			case 'currTitle':
				copy.currTitle = newValue;
				break;
			case 'email':
				copy.email = newValue;
				break;
			case 'phone':
				copy.phone = newValue;
				break;
			case 'location':
				copy.location = newValue;
				break;
			default:
				break;

		}
		this.setState({
			contact: copy
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
					skills={personals.skills}
					interests={personals.interests}
				/>
			</div>
		);
	}
}

export default App;
