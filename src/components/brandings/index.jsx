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
		<section className="section__padding">
			<div className="app__brandings-container">
				<figure>
					<img src={googlePNG} alt="google png" />
				</figure>
				<figure>
					<img src={slackPNG} alt="slack png" />
				</figure>
				<figure>
					<img src={atlassianPNG} alt="atlassian png" />
				</figure>
				<figure>
					<img src={dropboxPNG} alt="dropbox png" />
				</figure>
				<figure>
					<img src={shopifyPNG} alt="shopify png" />
				</figure>
			</div>
		</section>
	)
}

export default Brandings
