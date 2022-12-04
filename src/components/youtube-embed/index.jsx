import React from 'react'
import propTypes from 'prop-types'
import './styles.css'

const youtubeURL = 'https://www.youtube.com/embed'

const YoutubeEmbed = ({ embedAdress, videoTitle }) => {
	return (
		<div className="app__video-container">
			<h1 className='app__video-title'>{ videoTitle }</h1>

			<iframe
				className="app__video-iframe"
				src={`${youtubeURL}/${embedAdress}`}
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
				allowFullScreen
				title="Embedded youtube video"
			/>
		</div>
	)
}

YoutubeEmbed.propTypes = {
	embedAdress: propTypes.string.isRequired,
	videoTitle: propTypes.string.isRequired
}

export default YoutubeEmbed


