import React from "react"
import { Link } from "react-router-dom"

const Button = (props) => {
	return (
		<Link className="home-buttons" to={props.to}>
			{props.text}
		</Link>
	)
}

export default Button
