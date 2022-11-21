import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import applicationLogo from '../../assets/images/logo.svg'
import './styles.css'

const Navbar = () => {
	return (
		<nav className='app__navbar'>
			<div className="app__navbar-container">
				<figure className="app__navbar-logo">
					<img src={applicationLogo} alt="gpt-3 svg logo" />
				</figure>

				<div className="app__navbar-container">
					<div className="app__navbar-links">
						<p><a href="#home">Inicio</a></p>
						<p><a href="#whats-gpt3">O que é GPT-3?</a></p>
						<p><a href="#open-ai">Open AI</a></p>
						<p><a href="#features">Recursos</a></p>
						<p><a href="#blog">Blog</a></p>
					</div>

					<div className="app__navbar-sign">
						<p>Sign IN</p>
						<button type="button">Sign UP</button>
					</div>

					<div className="app__navbar-dropdown">
						MENU
					</div>
				</div>
			</div>

		</nav>
	)
}

export default Navbar
