import React, { useState, useEffect } from "react"
import Axios from "axios"
import Buttons from "./Buttons"

const Home = (props) => {
	const [questions, updateQuestions] = useState([])
	const [fetchQuestions, updateFetchQuestions] = useState(false)
	const [hasInfo, setHasInfo] = useState(false)
	const [radioState, setRadioState] = useState(props.tense)

	// props.name and props.setName

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
		<div>
			<h1>Enter Name, Choose Your Question &amp; Find Your Fortune</h1>

			{hasInfo ? (
				<div>thanks</div>
			) : (
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						onChange={(e) => {
							props.setName(e.target.value)
						}}
					/>
					<div>
						<input
							type="radio"
							id="tense-present"
							name="tense"
							value="false"
							checked="checked"
							onChange={handleRadioChange}
						/>
						<label htmlFor="tense-present">Present</label>
						<input
							type="radio"
							id="tense-future"
							name="tense"
							value="true"
							onChange={handleRadioChange}
						/>
						<label htmlFor="tense-future">Future</label>
					</div>
					<input type="submit" value="Save" />
				</form>
			)}

			<div className="button-container">
				{questions.map((item, index) => {
					return (
						<div className={item.fields.areas.toLowerCase()} key={index}>
							<Buttons
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

{
	/* <form onSubmit={handleSubmit}>
    <label htmlFor="feedback"></label>
    <textarea
      name=""
      id="text"
      cols="10"
      rows="3"
      onChange={(e) => updateFeedback(e.target.value)}
      value={feedback}
    ></textarea>
    <input type="submit" value="Was that good for you?" />
  </form> */
}
