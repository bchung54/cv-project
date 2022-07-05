import React, { Component } from 'react';
import LineItem from './LineItem';
import uniqid from 'uniqid';

class Heading extends Component {
	render() {
		const { placeName, subTitle, timePeriod, location } = this.props;

		/* 		const { fromTime, toTime } = timePeriod;
		const { fromMonth, fromYear } = fromTime;
		const { toMonth, toYear } = toTime; */

		const { city, state } = location;
		return (
			<div className="heading">
				<div className="place-name">{placeName}</div>
				<div className="sub-title">{subTitle}</div>
				<div className="time-period">
					{timePeriod.from.month} {timePeriod.from.year} - {timePeriod.to.month}{' '}
					{timePeriod.to.year}
				</div>
				<div className="location">
					{city}, {state}
				</div>
			</div>
		);
	}
}

class ExperienceBlock extends Component {
	render() {
		const { placeName, subTitle, timePeriod, location } = this.props;
		return (
			<div className="experience" key={uniqid()}>
				<Heading
					placeName={placeName}
					subTitle={subTitle}
					timePeriod={timePeriod}
					location={location}
				/>
				{/* <div>
					{items.map((element) => (
						<LineItem text={element.text} subItems={element.subItems} />
					))}
				</div> */}
			</div>
		);
	}
}

export default ExperienceBlock;
