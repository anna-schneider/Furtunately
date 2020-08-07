import React, { useState } from "react"
import { Route } from "react-router-dom"
import "./App.css"
import Home from "./Home.js"
import Header from "./Header.js"
import Results from "./Results"
import Footer from "./Footer"

function App() {
	const [name, setName] = useState("")
	const [tense, setTense] = useState("false")

	return (
		<>
			<Header />

			<Route path="/" exact>
				<Home name={name} tense={tense} setTense={setTense} setName={setName} />
			</Route>

			<Route path="/results" exact>
				<Results name={name} setName={setName} />
			</Route>

			<Route path="/results/:area">
				<Results name={name} tense={tense} />
			</Route>

			<Footer />
		</>
	)
}

export default App
