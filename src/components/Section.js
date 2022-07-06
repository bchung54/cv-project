import React, { Component } from 'react';
import ExperienceBlock from './ExperienceBlock';

export class Personal extends Component {
	constructor(props) {
		super(props);

		this.state = {
			title: this.props.title,
			skills: this.props.skills,
			interests: this.props.interests
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
	constructor(props) {
		super(props);

		this.state = {
			experiences: this.props.experiences
		};
	}
	render() {
		const { title } = this.props;
		const { experiences } = this.state;
		return (
			<section>
				<div className="section-heading">
					<h2>{title}</h2>
					<span>
						<button>+Add Experience</button>
					</span>
				</div>
				<hr />
				{experiences.map((element, id) => {
					return (
						<ExperienceBlock
							placeName={element.placeName}
							subTitle={element.subTitle}
							timePeriod={element.timePeriod}
							location={element.location}
							items={element.items}
							label={title === 'Work Experience' ? 'work-exp' : 'edu-exp'}
							key={id}
						/>
					);
				})}
			</section>
		);
	}
}

export default Section;
