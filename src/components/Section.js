import React, { Component } from 'react';
import ExperienceBlock from './ExperienceBlock';
import uniqid from 'uniqid';

export class Personal extends Component {
	render() {
		const { title, skills, interests } = this.props;
		return (
			<section>
				<h2>{title}</h2>
				<hr />
				<div>
					<span className="personal">Skills: </span>
					<span>{skills ? skills.join(', ') : ''}</span>
					<span>
						<button className="add-personal">+Add Skill</button>
					</span>
				</div>
				<div>
					<span className="personal">Interests: </span>
					<span>{interests ? interests.join(', ') : ''}</span>
					<span>
						<button className="add-personal">+Add Interest</button>
					</span>
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
