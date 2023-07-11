import { getCompletion } from "@/openAiServices";
import { generateText } from "@/palm2Services"

const generatePrompt = (userData) => {
	return `
	Based on the user data below, generate an SOP for our digital marketing agency for any client website. The first input is who the SOP is for. The second input is what this SOP is about. The third input is what the SOP is centered around.

	Can you write a 30-word summary for each of the following criteria for that SOP: goal, ideal outcome, prerequisites and requirements, why this is important, where this is done, when this is done, and who does this?

	Can you make sure you do not change the name of each each criteria and style it in a bolded format and followed by a colon, then write the summary and go tot he next line at the end of the summary, Please leave the title of each criteria exactly as indicated above.
		
		user data:
		${JSON.stringify(userData)}
		
		Answer:
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

		return res.json({ result })
	} else {
		// Handle other HTTP methods or return an appropriate error response
		res.status(405).json({ error: 'Method Not Allowed' });
	}
}
