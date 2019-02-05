import React, { Component } from 'react';
import style from './style.scss';

const Headline = props => (
	<h1 className={`${style.headline} ${props.className || ''}`}>{props.children}</h1>
)
export default Headline;
