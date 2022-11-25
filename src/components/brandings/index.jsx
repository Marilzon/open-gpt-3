import React from 'react'
import {
	googlePNG,
	slackPNG,
	atlassianPNG,
	dropboxPNG,
	shopifyPNG
} from './brandings'
import './styles.css'

const Brandings = () => {
	return (
		<section className="app__brandings section__padding">
			<figure>
				<img className='branding-image' src={googlePNG} alt="google png" />
			</figure>
			<figure>
				<img className='branding-image'  src={slackPNG} alt="slack png" />
			</figure>
			<figure>
				<img className='branding-image'  src={atlassianPNG} alt="atlassian png" />
			</figure>
			<figure>
				<img className='branding-image'  src={dropboxPNG} alt="dropbox png" />
			</figure>
			<figure>
				<img className='branding-image'  src={shopifyPNG} alt="shopify png" />
			</figure>
		</section>
	)
}

export default Brandings
