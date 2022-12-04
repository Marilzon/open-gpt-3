import React from 'react'
import peoplePNG from '../../assets/images/people.png'
import aiPNG from '../../assets/images/ai.png'
import './styles.css'

const Header = () => {
	return (
		<section className="app__header section__padding" id="home">
			<div className="app__header-content">
				<h1 className="gradient__text">
					Vamos construir coisas incriveis com o Generative Pre-Training Transformer 3!
				</h1>
				<p>
					Generative Pre-Training Transformer 3 é um modelo de linguagem autoregressivo que usa aprendizagem profunda para produzir texto semelhante ao humano.
				</p>

				<div className="app__header-form">
					<input type="email" value="https://beta.openai.com/docs/models/gpt-3" readonly/>
					<a href="https://beta.openai.com/docs/models/gpt-3" type='button' target="_blank">Acessar</a>
				</div>

				<div className="app__header-people">
					<img src={peoplePNG} alt="people png" />
					<p>Mais de 1.600 visitas nas ultimas 24 horas</p>
				</div>
			</div>

			<figure className="app__header-figure">
				<img src={aiPNG} alt="artificial intelligence figure" />
			</figure>
		</section>
	)
}

export default Header
