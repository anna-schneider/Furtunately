import React, { useState } from "react"
import Axios from "axios"

function CreateQuestion(props) {
	const [area, updateArea] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = await Axios.post(
			"https://api.airtable.com/v0/appBngxxdOcilCD4C/Table%201",
			{
				fields: {
					area: area,
				},
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
				},
			}
		)
		updateArea(" ")
		props.updateFetchQuestions(!props.updateFetchQuestions)
	}

	return (
		<form>
			<h3>Or Ask Your Own Question</h3>
		</form>
	)
}
