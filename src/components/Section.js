import React, { Component } from 'react';
import ExperienceBlock from './ExperienceBlock';

export class Personal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title,
			skills: ['PPT', 'Excel'],
			interests: ['basketball']
		};
	}
	render() {
		const { title, skills, interests } = this.state;
		return (
			<section>
				<h2>{title}</h2>
				<hr />
				<div>
					<span className="personal">Skills: </span>
					<span>{skills ? skills.join(', ') : ''}</span>
				</div>
				<div>
					<span className="personal">Interests: </span>
					<span>{interests ? interests.join(', ') : ''}</span>
				</div>
			</section>
		);
	}
}

class Section extends Component {
	constructor(props) {
		super(props);

		this.state = {
			experiences: [
				{
					placeName: 'Company',
					subTitle: 'Janitor',
					timePeriod: {
						from: {
							month: 'Jan',
							year: 2010
						},
						to: {
							month: 'May',
							year: 2015
						}
					},
					location: {
						city: 'Denver',
						state: 'CO'
					},
					items: [
						{
							text: 'Manage facilities',
							subItems: ['Open facilities', 'Close facilities']
						},
						{
							text: 'Park cars',
							subItems: ['Drive cars fast', 'Fit tight spaces']
						}
					]
				}
			]
		};
	}
	render() {
		const { title } = this.props;
		const { experiences } = this.state;
		return (
			<section>
				<h2>{title}</h2>
				<hr />
				{experiences.map((element, id) => {
					return (
						<ExperienceBlock
							placeName={element.placeName}
							subTitle={element.subTitle}
							timePeriod={element.timePeriod}
							location={element.location}
							items={element.items}
							key={id}
						/>
					);
				})}
			</section>
		);
	}
}

export default Section;
