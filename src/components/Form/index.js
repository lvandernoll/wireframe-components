import React, { Component } from 'react';
import Button from '../Button';
import style from './default.scss';
import layout5 from './layout5.scss';

const Form = props => {
	if(props.layout === '4-1') {
		return (
			<form className={`${style.form} ${props.className || ''}`}>
			<div className={style.inputWrapper}>
				<div className={style.blockFirst}>
					<input className={`${style.input} ${style.inputSmall}`} type='text' />
					<input className={`${style.input} ${style.inputSmall}`} type='text' />
					<input className={`${style.input} ${style.inputSmall}`} type='text' />
					<input className={`${style.input} ${style.inputSmall}`} type='text' />
				</div>
				<textarea className={`${style.blockSecond} ${style.input} ${style.inputBig}`} />
			</div>
			<Button className={style.button} type='dark' />
			</form>
		);
	} else if(props.layout === '5') {
		return (
			<form className={`${layout5.form} ${props.className || ''}`}>
			<div className={layout5.inputWrapper}>
				<div className={layout5.blockFirst}>
					<input className={`${layout5.input} ${layout5.inputSmall}`} type='text' />
					<input className={`${layout5.input} ${layout5.inputSmall}`} type='text' />
					<input className={`${layout5.input} ${layout5.inputSmall}`} type='text' />
					<input className={`${layout5.input} ${layout5.inputSmall}`} type='text' />
				</div>
				<textarea className={`${layout5.blockSecond} ${layout5.input} ${layout5.inputBig}`} />
			</div>
			<Button className={layout5.button} type='dark' />
			</form>
		);
	}
}
export default Form;
