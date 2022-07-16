import React, { Component } from 'react';
import '../styles/section.css';
import ExperienceBlock from './ExperienceBlock';
import uniqid from 'uniqid';
import { AddExperienceForm, ExperienceEditForm } from './Forms';

class Section extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: this.props.title,
			experience: this.props.experiences,
			add: false,
			editIndex: 0
		};
		this.toggleAddExp = this.toggleAddExp.bind(this);
		this.handleAddSubmit = this.handleAddSubmit.bind(this);
		this.handleEditClick = this.handleEditClick.bind(this);
		this.handleExperienceEdit = this.handleExperienceEdit.bind(this);
	}

	toggleAddExp() {
		this.setState((prevState) => ({
			add: !prevState.add
		}));
	}

	handleAddSubmit(e) {
		e.preventDefault();
		const placeName = e.target.placeName.value;
		const subTitle = e.target.subTitle.value;
		const timePeriodArray = e.target.timePeriod.value.split(' ');
		const locationArray = e.target.location.value.split(', ');
		const items = [e.target['item-1'].value, e.target['item-2'].value, e.target['item-3'].value];
		let experiences = [...this.state.experience];

		items.forEach((element, index) => {
			element ? (items[index] = element) : (items[index] = '');
		});

		experiences.push({
			placeName: placeName,
			subTitle: subTitle,
			timePeriod: {
				from: {
					month: timePeriodArray[0],
					year: parseInt(timePeriodArray[1])
				},
				to: {
					month: timePeriodArray[3],
					year: parseInt(timePeriodArray[4])
				}
			},
			location: {
				city: locationArray[0],
				state: locationArray[1]
			},
			items: items
		});

		this.setState({
			experience: experiences
		});
		this.toggleAddExp();
		e.target.reset();
	}

	handleEditClick(e) {
		this.setState({
			editIndex: parseInt(e.target.id.split('-')[2])
		});
	}

	handleExperienceEdit(e) {
		const index = this.state.editIndex;
		const toEdit = e.target.name;
		const text = e.target.value;
		const expCopy = [...this.state.experience];
		const expToEdit = expCopy[index];

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
				console.log(expToEdit.items);
				expToEdit.items[itemIndex - 1] = text;
				break;
		}
		this.setState({
			experience: expCopy
		});
	}

	render() {
		const { title, experience, add, editIndex } = this.state;
		const label = () => (title === 'Work Experience' ? 'work' : 'edu');
		Array.from(experience).sort((a, b) => b.timePeriod.to.year - a.timePeriod.to.year);
		return (
			<section>
				<div className="section-heading">
					<h2>{title}</h2>
					<span className="exp-add">
						<button className="exp-add-btn" onClick={this.toggleAddExp}>
							+Add Experience
						</button>
					</span>
				</div>
				{add && <AddExperienceForm title={title} onAddSubmit={this.handleAddSubmit} />}
				<hr />
				{experience.map((element, index) => {
					return (
						<ExperienceBlock
							exp={element}
							label={label()}
							expIndex={index}
							onExperienceTextChange={this.handleExperienceEdit}
							onEditClick={this.handleEditClick}
							key={uniqid()}
						/>
					);
				})}
				<ExperienceEditForm
					experiences={experience}
					editIndex={editIndex}
					label={label()}
					onExperienceChange={this.handleExperienceEdit}
				/>
			</section>
		);
	}
}

export default Section;
