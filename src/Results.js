import React, { useState, useEffect } from "react"
import Axios from "axios"
import { useParams } from "react-router-dom"
import LuckyNumbers from "./LuckyNumbers"
import Buttons from "./Buttons"
import CreateQuestion from "./CreateQuestion"

const Results = () => {
	const params = useParams()

	console.log(params)
	const [affirmation, updateAffirmation] = useState("")
	const [fetchAffirmation, updateFetchAffirmation] = useState(false)

	useEffect(() => {
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
		<div>
			<h1 className="show-fortune">{affirmation}</h1>
			<h2>{params.areas}</h2>
			<LuckyNumbers />
			<CreateQuestion />
			<Buttons className="restart-button" href={"/"} text="Ask Again" />
		</div>
	)
}

export default Results
