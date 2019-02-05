import React from 'react';
import style from './styles.scss';

const Nav = props => (
	<nav className={style.nav}>
		<ul className={style.navul}>
			<li>Link</li>
			<li>Link</li>
			<li>Link</li>
			<li>Link</li>
		</ul>
		{props.home && <button className={style.navbutton}> </button>}
	</nav>
)

export default Nav
