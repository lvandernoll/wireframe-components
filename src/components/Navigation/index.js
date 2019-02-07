import React, { Component } from 'react';
import style from './style.scss';

const Navigation = props => {
	let items = [];
	props.children.forEach(child => {
		items.push(<li className={style.item}>{child}</li>)
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
