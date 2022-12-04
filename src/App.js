import React from "react"
import { Article, Brandings, CTA, Feature, Navbar } from "./components"
import { About, Blog, Footer, Header, Possibility } from "./pages"
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
			<Possibility />
			<CTA />
			<Blog />
			<Footer />
		</div>
	)
}

export default App
