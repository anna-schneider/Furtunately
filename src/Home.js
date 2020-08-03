import React, { useState, useEffect } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
	const apiCall = async () => {
		console.log("key", process.env)

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
	return <div />
}

export default Home
