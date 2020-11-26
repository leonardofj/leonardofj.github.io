import React, { Component } from 'react'

export default class ProjectBox extends Component {
	render() {
		return (
			<div className="col-md-4 text-center animate-box">
				<div className={this.props.color}>
					<span className="icon">
						<i className={this.props.icon} />
					</span>
					<div className="desc">
						<h3><a href={this.props.link}
							target="_blank" rel="noopener noreferrer">{this.props.title}</a></h3>
						<p>{this.props.text}</p>
					</div>
				</div>
			</div>
		)
	}
}
