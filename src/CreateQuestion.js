import React, { useState } from "react"
import Axios from "axios"

function CreateQuestion(props) {
	const [newArea, updateNewArea] = useState("")
	const [newText, updateNewText] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = await Axios.post(
			"https://api.airtable.com/v0/appBngxxdOcilCD4C/Table%201",
			{
				fields: {
					area: newArea,
					text: newText,
				},
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
				},
			}
		)
		updateNewArea(" ")
		updateNewText(" ")
		props.updateFetchQuestions(!props.updateFetchQuestions)
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="new-question"></label>
			<textarea
				name=""
				id="text"
				cols="15"
				rows="5"
				onChange={(e) => updateNewArea(e.target.value)}
				value={newArea}
			></textarea>
			<input type="submit" value="Ask Your Own Question" />
		</form>
	)
}

export default CreateQuestion
