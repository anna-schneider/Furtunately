import React from "react"

const Buttons = (props) => {
	return (
		<a className="home-buttons" href={props.href}>
			{props.text}
		</a>
	)
}

export default Buttons
