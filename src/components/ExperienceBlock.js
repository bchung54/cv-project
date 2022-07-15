import React, { Component } from 'react';
import LineItem from './LineItem';
import uniqid from 'uniqid';

class HeadingLeft extends Component {
	render() {
		const { placeName, subTitle } = this.props;
		return (
			<div className="heading-left">
				<h3 className="place-name">{placeName}</h3>
				<div className="sub-title">{subTitle}</div>
			</div>
		);
	}
}

class TimeBlock extends Component {
	render() {
		const { timePeriod } = this.props;
		return (
			<h3 className="time-period">
				{timePeriod.from.month} {timePeriod.from.year} - {timePeriod.to.month} {timePeriod.to.year}
			</h3>
		);
	}
}

class TimeStamp extends Component {
	render() {
		const { timePeriod } = this.props;
		return (
			<h3 className="time-period">
				{timePeriod.to.month} {timePeriod.to.year}
			</h3>
		);
	}
}

class HeadingRight extends Component {
	render() {
		const { timePeriod, location } = this.props;
		const { from, to } = timePeriod;
		if (to.year === from.year && to.month === from.month && typeof to.year === 'number') {
			return (
				<div className="heading-right">
					<TimeStamp timePeriod={timePeriod} />
					<div className="location">
						{location.city}, {location.state}
					</div>
				</div>
			);
		}
		return (
			<div className="heading-right">
				<TimeBlock timePeriod={timePeriod} />
				<div className="location">
					{location.city}, {location.state}
				</div>
			</div>
		);
	}
}

class Heading extends Component {
	render() {
		const { placeName, subTitle, timePeriod, location } = this.props;
		return (
			<div className="heading">
				<HeadingLeft placeName={placeName} subTitle={subTitle} />
				<HeadingRight timePeriod={timePeriod} location={location} />
			</div>
		);
	}
}

class ExperienceBlock extends Component {
	constructor(props) {
		super(props);
		this.handleExperienceTextChange = this.handleExperienceTextChange.bind(this);
		this.displayEditForm = this.displayEditForm.bind(this);
	}

	handleExperienceTextChange(e) {
		this.props.onExperienceTextChange(e);
	}

	displayEditForm(e) {
		const formCategory = e.target.id.split('-')[1] + '-form';
		const form = document.getElementById(formCategory);
		form.style.display = 'block';
		this.props.onEditClick(e);
	}

	render() {
		const { exp, label, expIndex } = this.props;
		const editID = 'edit-' + label + '-' + expIndex;
		if (label === 'work') {
			return (
				<div className={label}>
					<div className="exp-content">
						<Heading
							placeName={exp.placeName}
							subTitle={exp.subTitle}
							timePeriod={exp.timePeriod}
							location={exp.location}
							index={expIndex}
						/>
						<ul className="desc-item">
							{exp.items.map((element, index) => (
								<LineItem
									key={uniqid()}
									text={element}
									label={label}
									expIndex={expIndex}
									itemIndex={index}
								/>
							))}
						</ul>
						<button className="exp-edit-btn" id={editID} onClick={this.displayEditForm}>
							Edit
						</button>
					</div>
				</div>
			);
		}
		return (
			<div className={label}>
				<div className="exp-content">
					<Heading
						placeName={exp.placeName}
						subTitle={exp.subTitle}
						timePeriod={exp.timePeriod}
						location={exp.location}
					/>
					<div>
						{exp.items.map((element) => (
							<LineItem text={element} key={uniqid()} />
						))}
					</div>
					<button className="exp-edit-btn" id={editID} onClick={this.displayEditForm}>
						Edit
					</button>
				</div>
			</div>
		);
	}
}

export default ExperienceBlock;
