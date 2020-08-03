import React, { Component, useState, useEffect } from "react"
import { Route, Link } from "react-router-dom"
import Axios from "axios"
import "./App.css"
import Home from "./Home.js"
import Header from "./Header.js"

function App() {
	const apiCall = async () => {
		const data = await Axios(
			"https://api.airtable.com/v0/appBngxxdOcilCD4C/Table%201",
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
				},
			}
		)
		console.log(data.data.records)
	}
	apiCall()

	return (
		<div>
			<Header />
		</div>
	)
}

export default App
