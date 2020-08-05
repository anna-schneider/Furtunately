import React, { useState } from "react"
import Axios from "axios"

function CreateQuestion(props) {
	const [feedback, updateFeedback] = useState("")

	const handleSubmit = async (e) => {
		e.preventDefault()
		try {
			const data = await Axios.post(
				"https://api.airtable.com/v0/appBngxxdOcilCD4C/Table%201",
				{
					fields: {
						feedback: feedback,
					},
				},
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
					},
				}
			)

			console.log(data)
		} catch (e) {
			console.log(e)
		}
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="feedback"></label>
			<textarea
				name=""
				id="text"
				cols="15"
				rows="5"
				onChange={(e) => updateFeedback(e.target.value)}
				value={feedback}
			></textarea>
			<input type="submit" value="Was that good for you?" />
		</form>
	)
}

export default CreateQuestion
