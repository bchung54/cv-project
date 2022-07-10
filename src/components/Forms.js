import React, { Component } from 'react';

class HeaderEditForm extends Component {
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

export default HeaderEditForm;
