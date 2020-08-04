import React from "react"
import Axios from "axios"

const Results = () => {
	const secondApiCall = async () => {
		const data = await Axios.get("https://www.affirmations.dev", {
			headers: {
				Accept: `application/json`,
			},
		})

		console.log(data.data.records)
	}
	secondApiCall()
}

export default Results
