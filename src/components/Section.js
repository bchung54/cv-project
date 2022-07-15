import React, { Component } from 'react';
import ExperienceBlock from './ExperienceBlock';
import uniqid from 'uniqid';
import { ExperienceEditForm } from './Forms';

class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			editIndex: 0
		};
		this.handleExperienceTextChange = this.handleExperienceTextChange.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	handleExperienceTextChange(e) {
		const label = () => (this.props.title === 'Work Experience' ? 'work' : 'edu');
		this.props.onExperienceTextChange(e, label(), this.state.editIndex);
	}

	handleEditClick(e) {
		this.setState({
			editIndex: parseInt(e.target.id.split('-')[2])
		});
	}

	render() {
		const { title, experiences } = this.props;
		const label = () => (title === 'Work Experience' ? 'work' : 'edu');
		experiences.sort((a, b) => b.timePeriod.to.year - a.timePeriod.to.year);
		return (
			<section>
				<div className="section-heading">
					<h2>{title}</h2>
					<span>
						<button onClick={this.handleAddExp}>+Add Experience</button>
					</span>
				</div>
				<hr />
				{experiences.map((element, index) => {
					return (
						<ExperienceBlock
							exp={element}
							label={label()}
							expIndex={index}
							onExperienceTextChange={this.handleExperienceTextChange}
							onEditClick={this.handleEditClick}
							key={uniqid()}
						/>
					);
				})}
				<ExperienceEditForm
					experiences={experiences}
					onExperienceChange={this.handleExperienceTextChange}
					editIndex={this.state.editIndex}
					label={label()}
				/>
			</section>
		);
	}
}

export default Section;
