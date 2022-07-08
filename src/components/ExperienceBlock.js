import React, { Component } from 'react';
import { AddButton } from './Buttons';
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
	render() {
		const { placeName, subTitle, timePeriod, location, items, label } = this.props;
		if (label === 'work-exp') {
			return (
				<div className={label}>
					<Heading
						placeName={placeName}
						subTitle={subTitle}
						timePeriod={timePeriod}
						location={location}
					/>
					<ul className="desc-item">
						{items.map((element) => (
							<LineItem
								text={element.text}
								subItems={element.subItems}
								type={label}
								key={uniqid()}
							/>
						))}
					</ul>
					<AddButton text="+ Add Responsibility" />
				</div>
			);
		}
		return (
			<div className={label}>
				<Heading
					placeName={placeName}
					subTitle={subTitle}
					timePeriod={timePeriod}
					location={location}
				/>
				<div>
					{items.map((element) => (
						<LineItem text={element.text} subItems={element.subItems} type={label} key={uniqid()} />
					))}
				</div>
				<AddButton text="+ Add Description" />
			</div>
		);
	}
}

export default ExperienceBlock;
