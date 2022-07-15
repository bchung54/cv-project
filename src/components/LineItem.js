import React, { Component } from 'react';

class LineItem extends Component {
	render() {
		const { text, label, expIndex, Itemindex } = this.props;
		const id = [label, 'exp', expIndex, 'item', Itemindex].join('-');
		return (
			<li className="line-item" id={id}>
				<span className="line-text">{text}</span>
			</li>
		);
	}
}

export default LineItem;
