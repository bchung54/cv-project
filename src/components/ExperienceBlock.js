import React, { Component } from 'react';
import LineItem from './LineItem';
import uniqid from 'uniqid';

class Heading extends Component {
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
		const { placeName, subTitle, timePeriod, location, items } = this.props;
		return (
			<div className="experience">
				<Heading
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
			</div>
		);
	}
}

export default ExperienceBlock;
