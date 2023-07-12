import { getCompletion } from "@/openAiServices";
import { generateText } from "@/palm2Services"

const generatePrompt = (userData) => {
	return `
	Based on the user data below, generate an SOP for our digital marketing agency for any client website.
	The first input is who the SOP is for. The second input is what this SOP is about. The third input is what the SOP is centered around.

	Can you write a 30-word summary for each of the following criteria for that SOP. Please return the result with the HTML formatting as follows:
	
	<p><strong>Goal:</strong> summary here</p>
	<p><strong>Ideal outcome:</strong> summary here</p>
	<p><strong>Prerequisites and requirements:</strong> summary here</p>
	<hr>
	<p><strong>Why this is important:</strong> summary here<br></p>
	<p><strong>Where this is done:</strong> summary here<br></p>
	<p><strong>When this is done:</strong> summary here<br></p>
	<p><strong>Who does this:</strong> summary here</p>

	User Data:
	<code>${JSON.stringify(userData)}</code><br><br>

	<strong>Answer:</strong>
	`
}

export default async function handler(req, res) {
	if (req.method === 'POST') {
		let result;
		const {
			subject,
			detail,
			age,
			role,
			model,
		} = req.body

		// generate the prompt
		const prompt = generatePrompt({ subject, detail, age, role })

		if (model.toLowerCase() === 'openai') {
			result = await getCompletion(prompt)
		} else {
			// PaLM API
			result = await generateText(prompt)
		}

		return res.json({ result: `<div class="new div">${result}</div>` })
	} else {
		// Handle other HTTP methods or return an appropriate error response
		res.status(405).json({ error: 'Method Not Allowed' });
	}
}
