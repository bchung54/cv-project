import React, { Component } from 'react';
import ExperienceBlock from './ExperienceBlock';
import uniqid from 'uniqid';
import { ExperienceEditForm } from './Forms';

class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			experience: this.props.experiences,
			editIndex: 0
		};
		this.handleEditClick = this.handleEditClick.bind(this);
	}

	handleExperienceEdit(e) {
		const category = () => (this.props.title === 'Work Experience' ? 'work' : 'edu');
		const index = this.state.editIndex;
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
