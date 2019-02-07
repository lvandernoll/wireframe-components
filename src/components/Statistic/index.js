import React, { Component } from 'react';
import style from './style.scss';

class Statistic extends Component {

	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
		};
	}


	componentDidMount() {
		setTimeout(() => {
			this.setState({
				progress: this.props.value,
			});
		}, 1000);
	}

	render() {
		return (
			<div className={`${style.wrapper} ${this.props.className || ''}`}>
				<span>{this.props.title}</span>
				<div className={style.barsWrapper}>
					<div className={`${style.bar} ${style.barFilled}`} style={{width: `${this.state.progress}%`}} />
					<div className={`${style.bar} ${style.barEmpty}`} style={{width: `${100 - this.state.progress}%`}} />
				</div>
			</div>
		);
	}
}
export default Statistic;
