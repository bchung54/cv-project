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
		Array.from(header.children).forEach((child) => (child.style.display = 'block'));
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

export default HeaderEditForm;
