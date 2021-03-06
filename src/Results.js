import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"
import LuckyNumbers from "./LuckyNumbers"
import Button from "./Button"
import SaveDetails from "./SaveDetails"

const Results = (props) => {
	const params = useParams()

	console.log(params)
	const [affirmation, updateAffirmation] = useState(
		"Searching the void for your fortune"
	)
	const [fetchAffirmation, updateFetchAffirmation] = useState(false)

	useEffect(() => {
		const details = {
			name: props.name,
			interest: params.area,
			future: props.tense,
		}

		SaveDetails(details)

		const secondApiCall = async () => {
			const response = await Axios.get(
				"https://cors-anywhere.herokuapp.com/https://www.affirmations.dev",
				{
					headers: {
						Accept: `application/json`,
					},
				}
			)

			updateAffirmation(response.data.affirmation)
		}
		secondApiCall()
	}, [fetchAffirmation])

	return (
		<div className="results">
			{props.name && <div className="greeting">Hello {props.name}</div>}

			<h2>{params.area}</h2>
			<div className="crystal-ball-container">
				<div className="crystal-ball">
					<h1 className="show-fortune">
						{affirmation.split("").map((letter, index) => (
							<span className={index % 2 === 0 ? "burn" : "fire"}>
								{letter}
							</span>
						))}
					</h1>
				</div>
			</div>
			<h3>Lucky Numbers</h3>

			<LuckyNumbers />

			<div className="restart-container">
				<Button text={"Ask Again"} to={"/"} />
			</div>
		</div>
	)
}

export default Results
