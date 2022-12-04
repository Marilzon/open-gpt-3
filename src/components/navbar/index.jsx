import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import gpt3SVG from '../../assets/images/logo.svg'
import './styles.css'

const Menu = () => (
	<>
		<p><a href="#home">Inicio</a></p>
		<p><a href="#about-gpt3">Sobre</a></p>
		<p><a href="#open-ai">Open AI</a></p>
		<p><a href="#features">Recursos</a></p>
		<p><a href="#blog">Blog</a></p>
	</>
)

const SignIn = () => (
	<>
		<p>Sign IN</p>
		<button type="button">Sign UP</button>
	</>
)

const Navbar = () => {
	const [mobileMenu, setMobileMenu] = useState(false);

	return (
		<nav className='app__navbar'>
			<div className="app__navbar-container">
				<figure className="app__navbar-logo">
					<img src={gpt3SVG} alt="gpt-3 svg logo"/>
				</figure>

				<div className="app__navbar-links-container">
					<div className="app__navbar-links">
						<Menu />
					</div>

					<div className="app__navbar-sign">
						<SignIn />
					</div>
				</div>
			</div>

			<div className="app__navbar-mobile">
				{mobileMenu
					? <RiCloseLine color='#fff' size={26} onClick={() => setMobileMenu(false)} />
					: <RiMenu3Line color='#fff' size={26} onClick={() => setMobileMenu(true)} />
				}

				{mobileMenu && (
					<div className="app__navbar-mobile-container scale-up-center">
						<div className="app__navbar-links">
							<Menu />
						</div>

						<div className="app__navbar-sign">
							<SignIn />
						</div>
					</div>
				)}
			</div>
		</nav>
	)
}

export default Navbar
