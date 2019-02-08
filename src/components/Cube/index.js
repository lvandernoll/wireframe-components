import React, { Component } from 'react';
import style from './style.scss';
import cube from './cube';

const Cube = props => (
	<article className={`${style.wrapper} ${props.className || ''}`}>
		<div className={style.cubeWrapper}>
			<img className={style.cube} src={cube} />
			<span className={style.title}>{props.title}</span>
		</div>
	</article>
);
export default Cube;
