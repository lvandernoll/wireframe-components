import React from 'react';
import style from './styles.scss';

const Button = props => (
	<React.Fragment>
		{props.type === 'basic' && <button className={`${style.button} ${this.props.className || ''}`} />}
		{props.type === 'white' && <button className={`${style.button} ${style.buttonwhite} ${this.props.className || ''}`} />}
	</React.Fragment>
);
export default Button;
