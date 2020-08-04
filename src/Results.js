import React, { useState, useEffect } from "react"
import Axios from "axios"
import LuckyNumbers from "./LuckyNumbers"
import Buttons from "./Buttons"

///START
const Results = () => {
	const [affirmation, updateAffirmation] = useState([])
	const [fetchAffirmation, updateFetchAffirmation] = useState(false)

	useEffect(() => {
		const secondApiCall = async () => {
			const data = await Axios.get(
				"https://cors-anywhere.herokuapp.com/https://www.affirmations.dev",
				{
					headers: {
						Accept: `application/json`,
					},
				}
			)

			updateAffirmation(data.data.records)
			console.log(data)
		}
		secondApiCall()
	}, [fetchAffirmation])

	return (
		<div>
			<LuckyNumbers />

			<Buttons text="Ask Again" />
		</div>
	)
}

export default Results
