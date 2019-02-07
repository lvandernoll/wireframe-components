import React from 'react';
import style from './styles.scss';

const Button = props => (
	<React.Fragment>
		{props.type === 'dark' && <button className={`${style.button} ${props.className || ''}`} />}
		{props.type === 'dark-border' && <button className={`${style.button} ${style.buttonDarkBorder} ${props.className || ''}`} />}
		{props.type === 'white' && <button className={`${style.button} ${style.buttonWhite} ${props.className || ''}`} />}
	</React.Fragment>
);
export default Button;
