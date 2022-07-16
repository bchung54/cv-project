import React, { Component } from 'react';

export class HeaderEditForm extends Component {
	constructor(props) {
		super(props);
		this.handleHeaderTextChange = this.handleHeaderTextChange.bind(this);
	}

	handleHeaderTextChange(e) {
		this.props.onHeaderEdit(e.target.name, e.target.value);
	}

	handleSubmit(e) {
		e.preventDefault();

		const header = document.querySelector('header');
		Array.from(header.children)
			.filter((child) => child.id !== 'header-edit')
			.forEach((child) => (child.style.display = 'block'));
		const headerForm = document.getElementById('header-form');
		headerForm.style.display = 'none';
	}
	render() {
		const { name, currTitle, email, phone, location } = this.props.contact;
		return (
			<form
				id="header-form"
				onSubmit={this.handleSubmit}
				style={{ display: 'none' }}
				autoComplete="off"
			>
				<div className="header-input-main">
					<input
						type="text"
						name="name"
						className="header-name"
						placeholder="Full Name"
						value={name}
						onChange={this.handleHeaderTextChange}
					/>
					<input
						type="text"
						name="currTitle"
						className="header-title"
						placeholder="Current Job Title"
						value={currTitle}
						onChange={this.handleHeaderTextChange}
					/>
				</div>
				<div className="header-input-side">
					<input
						type="text"
						name="email"
						className="contact-text"
						placeholder="Email"
						value={email}
						onChange={this.handleHeaderTextChange}
					/>
					<input
						type="text"
						name="phone"
						className="contact-text"
						placeholder="Phone Number"
						value={phone}
						onChange={this.handleHeaderTextChange}
					/>
					<input
						type="text"
						name="location"
						className="contact-text"
						placeholder="Location"
						value={location}
						onChange={this.handleHeaderTextChange}
					/>
				</div>
				<button type="submit" id="header-submit" className="header-btn">
					Submit
				</button>
			</form>
		);
	}
}

export class ExperienceEditForm extends Component {
	constructor(props) {
		super(props);
		this.handleInputTextChange = this.handleInputTextChange.bind(this);
	}

	handleInputTextChange(e) {
		this.props.onExperienceChange(e);
	}

	handleSubmit(e) {
		e.preventDefault();
		e.target.style.display = 'none';
	}

	render() {
		const exp = this.props.experiences[this.props.editIndex];
		const id = this.props.label + '-form';
		return (
			<form className="exp-form" id={id} onSubmit={this.handleSubmit} autoComplete="off">
				<InputHeading
					placeName={exp.placeName}
					subTitle={exp.subTitle}
					timePeriod={exp.timePeriod}
					location={exp.location}
					onInputEdit={this.handleInputTextChange}
				/>
				<input
					type="text"
					name="item-1"
					value={exp.items[0]}
					onChange={this.handleInputTextChange}
				/>
				<input
					type="text"
					name="item-2"
					value={exp.items[1]}
					onChange={this.handleInputTextChange}
				/>
				<input
					type="text"
					name="item-3"
					value={exp.items[2]}
					onChange={this.handleInputTextChange}
				/>
				<button type="submit">Confirm</button>
			</form>
		);
	}
}

class InputHeading extends Component {
	constructor(props) {
		super(props);
		this.handleInputTextChange = this.handleInputTextChange.bind(this);
	}
	handleInputTextChange(e) {
		this.props.onInputEdit(e);
	}
	render() {
		const { placeName, subTitle, timePeriod, location } = this.props;
		const timePeriodText =
			timePeriod.from.month +
			' ' +
			timePeriod.from.year +
			' - ' +
			timePeriod.to.month +
			' ' +
			timePeriod.to.year;
		const locationText = location.city + ', ' + location.state;
		return (
			<div>
				<input
					type="text"
					name="placeName"
					value={placeName}
					onChange={this.handleInputTextChange}
				/>
				<input type="text" name="subTitle" value={subTitle} onChange={this.handleInputTextChange} />
				<input
					type="text"
					name="timePeriod"
					value={timePeriodText}
					onChange={this.handleInputTextChange}
				/>
				<input
					type="text"
					name="location"
					value={locationText}
					onChange={this.handleInputTextChange}
				/>
			</div>
		);
	}
}

export class PersonalEditForm extends Component {
	constructor(props) {
		super(props);
		this.handlePersonalTextChange = this.handlePersonalTextChange.bind(this);
	}

	handlePersonalTextChange(e) {
		const arr = e.target.value.split('.');
		arr.forEach((e) => e.trim());
		this.props.onPersonalEdit(e.target.name, arr);
	}

	handleSubmit(e) {
		e.preventDefault();
		const content = e.target.previousElementSibling;
		e.target.style.display = 'none';
		content.style.display = 'inline-block';
	}

	render() {
		const { label, text } = this.props;
		return (
			<form className="personals-form" onSubmit={this.handleSubmit} autoComplete="off">
				<input type="text" name={label} value={text} onChange={this.handlePersonalTextChange} />
				<button type="submit" className="personals-submit">
					Submit
				</button>
			</form>
		);
	}
}

export class AddExperienceForm extends Component {
	render() {
		return (
			<form className="add-form" onSubmit={this.props.onAddSubmit}>
				<input type="text" name="placeName" placeholder="Add company" />
				<input type="text" name="subTitle" placeholder="Add job title" />
				<input type="text" name="timePeriod" placeholder="Month YYYY - Month YYYY" />
				<input type="text" name="location" placeholder="City, ST" />
				<input
					type="text"
					name="item-1"
					placeholder="Add description such as core responsibilities"
				/>
				<input type="text" name="item-2" placeholder="Core Responsibility #2" />
				<input type="text" name="item-3" placeholder="Core Responsibility #3" />
				<button type="submit">Confirm</button>
			</form>
		);
	}
}