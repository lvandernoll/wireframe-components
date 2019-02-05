import React, { Component } from 'react';
import style from './style.scss';

const Subtitle = props => (
	<h2 className={`${style.subtitle} ${props.className || ''}`}>{props.children}</h2>
)
export default Subtitle;
