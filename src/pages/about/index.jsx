import React from 'react'
import { Feature } from '../../components'
import './styles.css'

const About = () => {
	return (
		<section className="app__about section__padding" id="about-gpt3">
			<div className="app__feature">
				<Feature
					title="Sobre GPT-3?"
					text="GPT-3 tem sido usado para criar artigos, poesias, histórias, reportagens e diálogos usando textos como entrada treinados por inteligência artificial."
				/>
			</div>

			<div className="app__about-heading">
				<h1 className="gradient__text">
					Possibilidades alêm de sua imaginação!
				</h1>
				<p>Explore a Biblioteca</p>
			</div>

			<div className="app__features-container">
				<Feature
					title="Chats inteligentes"
					text="Capacidade de conversar com um usuário humano por meio de linguagem escrita ou falada."
				/>
				<Feature
					title="Base de conhecimento"
					text="Conta com um vasto modelo de estruturas recorrentes onde é gerado classificações de textos
						, que auxiliam na performaçe de respostas a perguntas usando um texto base como fonte de conhecimento."
				/>
				<Feature
					title="Auxilio na educação"
					text="Um poderoso aliado como ferramenta de compreenção no ramo acadêmico, podendo se tornar um ambiente de aprendizado e tecnologia."
				/>
			</div>
		</section>
	)
}

export default About
