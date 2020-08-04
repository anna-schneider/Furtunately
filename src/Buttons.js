import React from "react"

const Buttons = (props) => {
	return (
		<a className="home-buttons" href="/results">
			{props.text}
		</a>
	)
}

export default Buttons
