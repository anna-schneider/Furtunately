import React, { Component, useState, useEffect } from "react"
import { Route, Link } from "react-router-dom"
import Axios from "axios"
import "./App.css"
import Home from "./Home.js"
import Header from "./Header.js"
import CreateQuestion from "./CreateQuestion.js"

function App() {
	return (
		<div>
			<Header />
			<Home />
		</div>
	)
}

export default App
