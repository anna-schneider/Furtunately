import React, { useState, useEffect } from "react"
import Axios from "axios"
import Button from "./Button"

const Home = (props) => {
	const [questions, updateQuestions] = useState([])
	const [fetchQuestions, updateFetchQuestions] = useState(false)
	const [hasInfo, setHasInfo] = useState(false)
	const [radioState, setRadioState] = useState(props.tense)

	function handleSubmit(e) {
		props.setTense(radioState)
		e.preventDefault()
		setHasInfo(true)
	}

	function handleRadioChange(e) {
		console.log(e.currentTarget.value)
		setRadioState(e.currentTarget.value)
	}

	useEffect(() => {
		const apiCall = async () => {
			const data = await Axios.get(
				"https://api.airtable.com/v0/appBngxxdOcilCD4C/Buttons",
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
		<div className="home">
			<h1>Enter Name, Choose Your Card &amp; Find Your Fortune</h1>

			{hasInfo ? (
				<div className="thanks">Thank you Fortune Seeker</div>
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={(e) => {
							props.setName(e.target.value)
						}}
					/>
					<div className="radio-button">
						<input
							type="radio"
							id="tense-present"
							name="tense"
							value="false"
							checked="checked"
							onChange={handleRadioChange}
						/>
						<label htmlFor="tense-present">Your Present</label>
						<input
							type="radio"
							id="tense-future"
							name="tense"
							value="true"
							onChange={handleRadioChange}
						/>
						<label htmlFor="tense-future">Your Future</label>
					</div>
					<input className="save-button" type="submit" value="Save" />
				</form>
			)}

			<div className="button-container">
				{questions.map((item, index) => {
					return (
						<div
							className={`home-button-container ${item.fields.areas.toLowerCase()}`}
							key={index}
						>
							<Button
								text={item.fields.areas}
								to={`/results/${item.fields.areas}`}
							/>
							<img src="/images/Card.jpg" alt="" />
						</div>
					)
				})}
			</div>
		</div>
	)
}

export default Home
