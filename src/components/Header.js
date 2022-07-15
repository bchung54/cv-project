import React, { Component } from 'react';
import { HeaderEditForm } from './Forms';
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

		this.state = {
			contact: this.props.contact
		};
		this.handleHeaderEdit = this.handleHeaderEdit.bind(this);
		this.displayEditForm = this.displayEditForm.bind(this);
	}

	handleHeaderEdit(label, text) {
		let contactCopy = { ...this.state.contact };
		switch (label) {
			case 'name':
				contactCopy.name = text;
				break;
			case 'currTitle':
				contactCopy.currTitle = text;
				break;
			case 'email':
				contactCopy.email = text;
				break;
			case 'phone':
				contactCopy.phone = text;
				break;
			case 'location':
				contactCopy.location = text;
				break;
			default:
				break;
		}
		this.setState({
			contact: contactCopy
		});
	}

	showEditBtn() {
		const button = document.getElementById('header-edit');
		button.style.display = 'block';
	}

	hideEditBtn() {
		const button = document.getElementById('header-edit');
		button.style.display = 'none';
	}

	displayEditForm(e) {
		const header = e.target.parentElement;
		Array.from(header.children).forEach((child) => (child.style.display = 'none'));
		document.getElementById('header-form').style.display = 'flex';
	}

	render() {
		const { name, currTitle, email, phone, location } = this.props.contact;

		return (
			<header onMouseEnter={this.showEditBtn} onMouseLeave={this.hideEditBtn}>
				<div className="header-main">
					<div className="header-name">{name}</div>
					<h3 className="header-title">{currTitle}</h3>
				</div>
				<div className="header-side">
					<ContactInfo type="email" text={email} />
					<ContactInfo type="phone" text={phone} />
					<ContactInfo type="location" text={location} />
				</div>
				<button id="header-edit" className="header-btn" onClick={this.displayEditForm}>
					Edit
				</button>
				<HeaderEditForm contact={this.props.contact} onHeaderEdit={this.handleHeaderEdit} />
			</header>
		);
	}
}

export default Header;
