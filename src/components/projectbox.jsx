import React, { Component } from 'react'
import { MdTranslate } from 'react-icons/md'
import { GiTicTacToe } from 'react-icons/gi'
import { FaQuestion } from 'react-icons/fa'
import { IconContext } from "react-icons"

export default class ProjectBox extends Component {
	render() {
		return (
			<div className="col-md-4 text-center animate-box">
				<div className={this.props.color}>
					<span className="icon">
						{getIcon(this.props.icon)}
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

export const getIcon = name => {
	var icon
	if (name === "GiTicTacToe") {
		icon = <GiTicTacToe />
	} else if (name === "MdTranslate") {
		icon = <MdTranslate />
	} else {
		icon = <FaQuestion />
	}
	return (
		<IconContext.Provider value={{ style: { fontSize: '55px', color: "white" } }}>
			<div>
				{icon}
			</div>
		</IconContext.Provider>)
}
