import React, { Component } from 'react';
import ExperienceBlock from './ExperienceBlock';
import { PersonalEditForm } from './Forms';
import uniqid from 'uniqid';

export class Personal extends Component {
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

class Section extends Component {
	handleAddExp() {
		this.setState();
	}

	handleAddForm() {}

	render() {
		const { title, experience } = this.props;
		experience.sort((a, b) => b.timePeriod.to.year - a.timePeriod.to.year);
		const timePlaceholder = {
			from: {
				month: 'Month',
				year: 'Year'
			},
			to: {
				month: 'Month',
				year: 'Year'
			}
		};
		const locationPlaceholder = {
			city: 'City',
			state: 'ST'
		};
		const itemsPlaceholder = [
			{
				text: 'Core Responsibility # 1',
				subItems: [
					'Sub-bullets are for more detail if needed, like key performance stats or a portfolio link.'
				]
			},
			{ text: 'Core Responsibility # 2' }
		];
		let idPlaceholder = 'add-edu-block';
		if (title === 'Work Experience') {
			idPlaceholder = 'add-work-block';
		}
		return (
			<section>
				<div className="section-heading">
					<h2>{title}</h2>
					<span>
						<button onClick={this.handleAddExp}>+Add Experience</button>
					</span>
				</div>
				<hr />
				{experience.map((element) => {
					return (
						<ExperienceBlock
							placeName={element.placeName}
							subTitle={element.subTitle}
							timePeriod={element.timePeriod}
							location={element.location}
							items={element.items}
							label={title === 'Work Experience' ? 'work-exp' : 'edu-exp'}
							key={uniqid()}
						/>
					);
				})}
				<div className="new-exp-block" id={idPlaceholder}>
					<ExperienceBlock
						placeName="Company Name"
						subTitle="Job Title"
						timePeriod={timePlaceholder}
						location={locationPlaceholder}
						items={itemsPlaceholder}
						label={title === 'Work Experience' ? 'work-exp' : 'edu-exp'}
						key={idPlaceholder}
					/>
				</div>
			</section>
		);
	}
}

export default Section;
