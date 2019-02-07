import React, { Component } from 'react';
import style from './style.scss';

class Statistic extends Component {

	constructor(props) {
		super(props);
		this.state = {
			progress: 0,
		};

		this.setFilledBarRef = element => {
			this.filledBar = element;
		}

		this.setEmptyBarRef = element => {
			this.emptyBar = element;
		}
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
					<div ref={this.setFilledBarRef} className={`${style.bar} ${style.filledBar}`} style={{width: `${this.state.progress}%`}} />
					<div ref={this.setEmptyBarRef} className={`${style.bar} ${style.emptyBar}`} style={{width: `${100 - this.state.progress}%`}} />
				</div>
			</div>
		)
	}
}
export default Statistic;
