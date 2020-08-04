import React, { Component, useState, useEffect } from "react"
import { Router, Route, Link } from "react-router-dom"
import Axios from "axios"
import "./App.css"
import Home from "./Home.js"
import Header from "./Header.js"
import CreateQuestion from "./CreateQuestion.js"
import LuckyNumbers from "./LuckyNumbers.js"
import Results from "./Results"

function App() {
	return (
		<div>
			<Header />
			<Route path="/" exact>
				<Home />
			</Route>
			<Route path="/results" exact>
				<Results />
			</Route>
		</div>
	)
}

export default App
