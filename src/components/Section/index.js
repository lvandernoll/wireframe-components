import React, { Component } from 'react';
import style from './style.scss';

const Section = props => (
	<section className={`${style.section} ${props.className || ''}`}>{props.children}</section>
)
export default Section;
