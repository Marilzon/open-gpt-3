import React, { useState } from 'react'
import { YoutubeEmbed } from '../../components'
import './styles.css'

const OpenAI = () => {

	return (
		<>
			<section className="app__section section__padding" id="open-ai">
				<YoutubeEmbed
					embedAdress='uNZSu8nSm4c'
					videoTitle='OpenAI: INTELIGÊNCIA ARTIFICIAL que escreve textos'
				/>
				<YoutubeEmbed
					embedAdress='DQYcg_jhfbk'
					videoTitle='Superando o bloqueio criativo usando OpenAI GPT-3'
				/>
			</section>

		</>
	)
}

export default OpenAI
