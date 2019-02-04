import React, { Component } from 'react';
import style from './style.js';

const Section = props => {
	let overwriteStyle = props.style ? props.style : {};
	let giveProps = Object.assign({}, props);
	delete giveProps.style;

	return (
		<section style={Object.assign(style.section, overwriteStyle)} {...giveProps} />
	)
};
export default Section;
