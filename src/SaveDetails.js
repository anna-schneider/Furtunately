import Axios from "axios"

function SaveDetails(data) {
	const { name, interest, future } = data

	console.log("from Save Details", data)

	try {
		Axios.post(
			"https://api.airtable.com/v0/appBngxxdOcilCD4C/User%20Info",
			{
				fields: {
					name: name || "",
					interest,
					future,
					time: new Date(),
				},
			},
			{
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_AIRTABLE_KEY}`,
				},
			}
		)
	} catch (e) {
		console.log(e)
	}
}

export default SaveDetails
