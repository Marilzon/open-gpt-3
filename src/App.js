import React from "react"
import { Brandings, Navbar } from "./components"
import { About, Blog, Footer, Header } from "./pages"
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
			<Blog />
			<Footer />
		</div>
	)
}

export default App
