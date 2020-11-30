import React, { Component } from 'react'
import ProjectBox from './projectbox'

export default class Projects extends Component {
	render() {
		return (
			<div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="row row-pt-md">
							<ProjectBox
								color="services color-1"
								icon="GiTicTacToe"
								title='Tic Tac Toe'
								link="https://leonardofj.github.io/tic-tac-toe-react/"
								text='Tic Tac Toe game built in React'
							/>
							<ProjectBox
								color="services color-3"
								icon="MdTranslate"
								title="Anime Learning"
								link="https://animelearning.wordpress.com#"
								text="Learning japanese through animes!"
							/>
							<ProjectBox
								color="services color-5"
								icon=""
								title="Next Project"
								link="#"
								text="What's next?"
							/>
						</div>
					</div>
				</section>
			</div>
		)
	}
}
