import React, { Component } from 'react';
import ExperienceBlock from './ExperienceBlock';

class Section extends Component {
	constructor() {
		super();

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
				<h3>{title}</h3>
				<hr />
				{experiences.map((element) => (
					<ExperienceBlock
						placeName={element.placeName}
						subTitle={element.subTitle}
						timePeriod={element.timePeriod}
						location={element.location}
					/>
				))}
			</section>
		);
	}
}

export default Section;
