import React from "react"

const LuckyNumbers = (props) => {
	// let LuckyNumbers = randomNumbers

	const randomNumbers = Math.random().toString().substr(2, 3)
	return <div>Your Lucky Numbers: {randomNumbers}</div>
}

export default LuckyNumbers
