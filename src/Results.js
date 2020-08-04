import React from "react"
import Axios from "axios"
import LuckyNumbers from "./LuckyNumbers"

const Results = () => {
	const secondApiCall = async () => {
		const data = await Axios.get("https://www.affirmations.dev", {
			headers: {
				Accept: `application/json`,
			},
		})
		// getting a CORS issue due to create-react-app's default settings
		// how to get around it?
		console.log("Affirms ", data)
	}
	secondApiCall()

	return <LuckyNumbers />
}

export default Results
