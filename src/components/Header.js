import React, { Component } from 'react';
import HeaderEditForm from './Forms';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faLocationDot } from '@fortawesome/free-solid-svg-icons';

class ContactInfo extends Component {
	render() {
		const { type, text } = this.props;
		let icon;
		switch (type) {
			case 'email':
				icon = <FontAwesomeIcon icon={faEnvelope} />;
				break;
			case 'phone':
				icon = <FontAwesomeIcon icon={faPhone} />;
				break;
			case 'location':
				icon = <FontAwesomeIcon icon={faLocationDot} />;
				break;
			default:
		}
		return (
			<h3 className="contact-item">
				<span className="contact-icon">{icon}</span>
				<span className="contact-text">{text}</span>
			</h3>
		);
	}
}

class Header extends Component {
	constructor(props) {
		super(props);
		this.handleHeaderEdit = this.handleHeaderEdit.bind(this);
		this.displayEditForm = this.displayEditForm.bind(this);
	}
	handleHeaderEdit(name, value) {
		this.props.onHeaderTextChange(name, value);
	}

	displayEditForm(e) {
		const header = e.target.parentElement;
		Array.from(header.children).forEach((child) => (child.style.display = 'none'));
		document.getElementById('header-form').style.display = 'flex';
	}

	render() {
		const { name, currTitle, email, phone, location } = this.props.contact;

		return (
			<header>
				<div className="header-main">
					<div className="header-name">{name}</div>
					<h3 className="header-title">{currTitle}</h3>
				</div>
				<div className="header-side">
					<ContactInfo type="email" text={email} />
					<ContactInfo type="phone" text={phone} />
					<ContactInfo type="location" text={location} />
				</div>
				<button className="header-btn" onClick={this.displayEditForm}>
					Edit
				</button>
				<HeaderEditForm contact={this.props.contact} onHeaderEdit={this.handleHeaderEdit} />
			</header>
		);
	}
}

export default Header;
