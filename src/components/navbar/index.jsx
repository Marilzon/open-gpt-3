import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './styles.css'

const Navbar = () => {
  return (
	<nav className='app__navbar'>
		<div className='app__navbar-links'>
			<div className="app__navbar-links_logo">
				<img src={logo} alt="app logo" />
			</div>
		</div>
	</nav>
  )
}

export default Navbar
