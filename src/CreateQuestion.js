import React, { useState } from "react"
import Axios from "axios"

function CreateQuestion(props) {
	const [area, updateArea] = useState("")
	const [text, updateText] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		const data = await Axios.post(
			"https://api.airtable.com/v0/appBngxxdOcilCD4C/Table%201",
			{
				fields: {
					area: area,
					text: text,
				},
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
				},
			}
		)
		updateArea(" ")
		updateText(" ")
		props.updateFetchQuestions(!props.updateFetchQuestions)
	}

	return (
		<form>
			<label htmlFor="Text"></label>
			<textarea
				name=""
				id="text"
				cols="15"
				rows="5"
				onChange={(e) => updateText(e.target.value)}
				value={text}
			></textarea>
			<input type="submit" value="Ask Your Own Question" />
		</form>
	)
}

export default CreateQuestion
