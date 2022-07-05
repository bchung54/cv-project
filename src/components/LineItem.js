import React, { Component } from 'react';

/* class SubItem extends Component {
	render() {
		const text = this.props.text;
		return <li className="sub-item">{text}</li>;
	}
} */

class LineItem extends Component {
	render() {
		const text = this.props.text;
		const subItems = this.props.subItems;
		if (subItems) {
			return (
				<li className="line-item">
					<div className>{text}</div>
					<ul className="sub-list">
						{subItems.map((element) => (
							<li className="sub-item">{element} </li>
						))}
					</ul>
				</li>
			);
		}
		return <li className="line-item">{text}</li>;
	}
}

export default LineItem;
