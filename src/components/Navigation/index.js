import React, { Component } from 'react';
import style from './style.scss';

const Navigation = props => {
	let items = [];
	props.children.forEach((child, i) => {
		items.push(<li className={style.item} key={i}>{child}</li>)
	});
	return (
		<nav className={props.className || ''}>
			<ul className={style.list}>
				{items}
			</ul>
		</nav>
	);
};
export default Navigation;
