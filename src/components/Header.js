import React, { Component } from 'react';
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
			<div className="contact-item">
				{icon}
				<span>{text}</span>
			</div>
		);
	}
}

class Header extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: this.props.name,
			currTitle: this.props.currTitle,
			email: this.props.email,
			phone: this.props.phone,
			location: this.props.location
		};
	}
	render() {
		const { name, currTitle, email, phone, location } = this.state;

		return (
			<header>
				<div>
					<div className="header-name">{name}</div>
					<div className="header-title">{currTitle}</div>
				</div>
				<div>
					<ContactInfo type="email" text={email} />
					<ContactInfo type="phone" text={phone} />
					<ContactInfo type="location" text={location} />
				</div>
			</header>
		);
	}
}

export default Header;
