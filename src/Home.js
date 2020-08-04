import React, { useState, useEffect } from "react"
import Axios from "axios"
import { Link } from "react-router-dom"
import CreateQuestion from "./CreateQuestion"
import Buttons from "./Buttons"

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

			updateQuestions(data.data.records)
		}
		apiCall()
	}, [fetchQuestions])

	return (
		<div>
			<h2>Choose Your Question And Find Your Fortune</h2>
			<div>
				{questions.map((item, index) => {
					return <button key={index}>{item.fields.areas}</button>
				})}
			</div>
			<CreateQuestion />
		</div>
	)
}

export default Home
