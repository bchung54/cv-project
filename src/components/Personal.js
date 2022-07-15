import React, { Component } from 'react';
import { PersonalEditForm } from './Forms';

class Personal extends Component {
	constructor(props) {
		super(props);
		this.handlePersonalEdit = this.handlePersonalEdit.bind(this);
	}

	handlePersonalEdit(label, arr) {
		this.props.onPersonalTextChange(label, arr);
	}

	showEditBtn(e) {
		const button = e.target.parentElement.querySelector('button');
		if (button) {
			button.style.display = 'inline-block';
		}
	}

	hideEditBtn(e) {
		const button = e.target.parentElement.querySelector('button');
		if (button) {
			button.style.display = 'none';
		}
	}

	displayEditForm(e) {
		const form = e.target.parentElement.nextElementSibling;
		const parent = e.target.parentElement;

		form.style.display = 'inline-block';
		parent.style.display = 'none';
	}

	render() {
		const { title, personals } = this.props;
		const skillsContent = personals.skills.join(', ');
		const interestsContent = personals.interests.join(', ');
		return (
			<section id="personals-section">
				<h2>{title}</h2>
				<hr />
				<div className="personals-subsection">
					<span className="personals-label">Skills: </span>
					<div
						className="personals-content"
						onMouseEnter={this.showEditBtn}
						onMouseLeave={this.hideEditBtn}
					>
						<span className="personals-text">{personals.skills ? skillsContent : ''}</span>
						<button id="skills-edit" className="personals-btn" onClick={this.displayEditForm}>
							Edit
						</button>
					</div>
					<PersonalEditForm
						label="skills"
						text={skillsContent}
						onPersonalEdit={this.handlePersonalEdit}
					/>
				</div>
				<div className="personals-subsection">
					<span className="personals-label">Interests: </span>
					<div
						className="personals-content"
						onMouseEnter={this.showEditBtn}
						onMouseLeave={this.hideEditBtn}
					>
						<span className="personals-text">{personals.interests ? interestsContent : ''}</span>
						<button id="interests-edit" className="personals-btn" onClick={this.displayEditForm}>
							Edit
						</button>
					</div>
					<PersonalEditForm
						label="interests"
						text={interestsContent}
						onPersonalEdit={this.handlePersonalEdit}
					/>
				</div>
			</section>
		);
	}
}

export default Personal;
