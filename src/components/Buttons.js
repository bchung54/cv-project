import React, { Component } from 'react';

export class AddButton extends Component {
	render() {
		const text = this.props.text;
		return (
			<span>
				<button>{text}</button>
			</span>
		);
	}
}
