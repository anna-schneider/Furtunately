import React from "react"

const LuckyNumbers = () => {
	const randomNumbers = (min, max) => {
		let n = []
		for (let i = 0; i < 3; i++) {
			n.push(Math.floor(Math.random() * max) + min)
		}
		return n.sort((a, b) => a - b).join(", ")
	}

	return <div className="lucky-numbers">{randomNumbers(1, 50)}</div>
}

export default LuckyNumbers
