import React from "react"
import { Brandings, Navbar, YoutubeEmbed } from "./components"
import { About, Blog, Footer, Header, OpenAI } from "./pages"
import "./App.css"

const App = () => {
	return (
		<div id="App">
			<div className="gradient__background">
				<Navbar />
				<Header />
			</div>
			<Brandings />
			<About />
			<OpenAI />
			<Blog />
			<Footer />
		</div>
	)
}

export default App
