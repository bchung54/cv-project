import React, { Component } from 'react';
import { AddButton } from './Buttons';
import uniqid from 'uniqid';

class SubItemList extends Component {
	render() {
		const { subItems } = this.props;
		return (
			<ul className="sub-list">
				{subItems.map((element) => (
					<li className="sub-item" key={uniqid()}>
						<span>{element}</span>
					</li>
				))}
			</ul>
		);
	}
}

class LineItem extends Component {
	render() {
		const { text, subItems } = this.props;
		if (subItems) {
			return (
				<li className="line-item">
					<span className="line-text">{text}</span>
					<AddButton text="+ Add Detail" />
					<SubItemList subItems={subItems} />
				</li>
			);
		}
		return <li className="line-item">{text}</li>;
	}
}

export default LineItem;
