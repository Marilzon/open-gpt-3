import React from 'react'
import './styles.css'

const Feature = ({ title, text }) => {
  return (
	<div className="app__feature-container">
		<div className="app__feature-title">
			{ title }
		</div>

		<div className="app__feature-text">
			{ text }
		</div>
	</div>
  )
}

export default Feature
