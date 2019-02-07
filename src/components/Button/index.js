import React from 'react';
import style from './styles.scss';

const Button = props => (
	<div>
		{props.type === 'basic' && <button className={style.button}></button>}
		{props.type === 'white' && <button className={[style.button, style.buttonwhite].join(' ')}></button>}
	</div>
)

export default Button
