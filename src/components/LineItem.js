import React, { Component } from 'react';

class LineItem extends Component {
	render() {
		const { text } = this.props;
		if (text) {
			return (
				<li className="line-item">
					<span className="line-text">{text}</span>
				</li>
			);
		}
	}
}

export default LineItem;
