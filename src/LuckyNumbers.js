import React from "react"

const LuckyNumbers = (props) => {
	// let LuckyNumbers = randomNumbers

	const randomNumbers = Math.random().toString().substr(2, 3)
	return <div>{randomNumbers}</div>
}

export default LuckyNumbers
