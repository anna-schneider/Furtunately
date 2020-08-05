import React, { useState, useEffect } from "react"
import Axios from "axios"
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
			<h1>Choose Your Question &amp; Find Your Fortune</h1>
			<div className="button-container">
				{questions.map((item, index) => {
					return (
						<div className={item.fields.areas.toLowerCase()} key={index}>
							<Buttons text={item.fields.areas} href={"/results"} />
						</div>
					)
				})}
			</div>
			<CreateQuestion />
		</div>
	)
}

export default Home
