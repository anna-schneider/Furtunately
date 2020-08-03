import React, { useState, useEffect } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"

const Home = () => {
	const [questions, updateQuestions] = useState([])
	const [fetchQuestions, updateFetchQuestions] = useState(false)

	useEffect(() => {
		const apiCall = async () => {
			const data = await Axios.get(
				"https://api.airtable.com/v0/appBngxxdOcilCD4C/Table%201",
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
					},
				}
			)
			console.log(data.data.records)
			updateQuestions(data.data.records)
		}
		apiCall()
	}, [fetchQuestions])

	return (
		<div>
			<h2>Choose Your Question And Find Your Fortune</h2>
		</div>
	)
}

export default Home
