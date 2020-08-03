import React, { Component, useState, useEffect } from "react"
import { Route, Link } from "react-router-dom"
import Axios from "axios"
import "./App.css"
import Home from "./Home.js"
import Header from "./Header.js"

class App extends Component {
	render() {
		return (
			<div className="App">
				<Home />
				<Header />
			</div>
		)
	}
}

export default App
