import React, { Component } from 'react';
import { AddButton } from './Buttons';
import LineItem from './LineItem';
import uniqid from 'uniqid';

class EduHeading extends Component {
	render() {
		const { placeName, subTitle, timePeriod, location } = this.props;
		const { city, state } = location;
		return (
			<div className="heading">
				<div className="heading-left">
					<h3 className="place-name">{placeName}</h3>
					<div className="sub-title">{subTitle}</div>
				</div>
				<div className="heading-right">
					<h3 className="time-period">
						{timePeriod.from.month} {timePeriod.from.year}
					</h3>
					<div className="location">
						{city}, {state}
					</div>
				</div>
			</div>
		);
	}
}

class WorkHeading extends Component {
	render() {
		const { placeName, subTitle, timePeriod, location } = this.props;
		const { city, state } = location;
		return (
			<div className="heading">
				<div className="heading-left">
					<h3 className="place-name">{placeName}</h3>
					<div className="sub-title">{subTitle}</div>
				</div>
				<div className="heading-right">
					<h3 className="time-period">
						{timePeriod.from.month} {timePeriod.from.year} - {timePeriod.to.month}{' '}
						{timePeriod.to.year}
					</h3>
					<div className="location">
						{city}, {state}
					</div>
				</div>
			</div>
		);
	}
}

class ExperienceBlock extends Component {
	render() {
		const { placeName, subTitle, timePeriod, location, items, label } = this.props;
		if (label === 'work-exp') {
			return (
				<div className={label}>
					<WorkHeading
						placeName={placeName}
						subTitle={subTitle}
						timePeriod={timePeriod}
						location={location}
					/>
					<div>
						{items.map((element) => (
							<LineItem text={element.text} subItems={element.subItems} key={uniqid()} />
						))}
					</div>
					<AddButton text="+ Add Responsibility" />
				</div>
			);
		}
		return (
			<div className={label}>
				<EduHeading
					placeName={placeName}
					subTitle={subTitle}
					timePeriod={timePeriod}
					location={location}
				/>
				<div>
					{items.map((element) => (
						<LineItem text={element.text} subItems={element.subItems} key={uniqid()} />
					))}
				</div>
				<AddButton text="+ Add Description" />
			</div>
		);
	}
}

export default ExperienceBlock;
