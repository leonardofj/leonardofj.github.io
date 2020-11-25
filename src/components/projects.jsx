import React, { Component } from 'react'

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
							<div className="col-md-4 text-center animate-box">
								<div className="services color-1">
									<span className="icon">
										<i className="icon-bulb" />
									</span>
									<div className="desc">
										<h3><a href="https://leonardofj.github.io/tic-tac-toe-react/" target="_blank">Tic Tac Toe</a></h3>
										<p>Tic Tac Toe game built in React</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-3">
									<span className="icon">
										<i className="icon-phone3" />
									</span>
									<div className="desc">
										<h3>Data Structures</h3>
										<p>As coming from the CS background</p>
									</div>
								</div>
							</div>
							<div className="col-md-4 text-center animate-box">
								<div className="services color-5">
									<span className="icon">
										<i className="icon-data" />
									</span>
									<div className="desc">
										<h3>Dev Ops</h3>
										<p>I am pursuing my internship</p>
									</div>
								</div>
							</div>
							{/*
			  <div className="col-md-4 text-center animate-box">
				  <div className="services color-2">
				  <span className="icon">
					  <i className="icon-data" />
				  </span>
				  <div className="desc">
					  <h3>Dev Ops</h3>
					  <p>Jenkins , Kubernetes , Docker </p>
				  </div>
				  </div>
			  </div>
			  <div className="col-md-4 text-center animate-box">
				  <div className="services color-4">
				  <span className="icon">
					  <i className="icon-layers2" />
				  </span>
				  <div className="desc">
					  <h3>Graphic Design</h3>
					  <p>My friend knows .. P</p>
				  </div>
				  </div>
			  </div>
			  <div className="col-md-4 text-center animate-box">
				  <div className="services color-6">
				  <span className="icon">
					  <i className="icon-phone3" />
				  </span>
				  <div className="desc">
					  <h3>Digital Marketing</h3>
					  <p>I use Instagram eight hours a day :) </p>
				  </div>
				  </div>
			  </div>
			  */}
						</div>
					</div>
				</section>
			</div>
		)
	}
}
