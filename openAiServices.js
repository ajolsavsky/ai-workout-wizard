import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const OPEN_AI_CHAT_COMPLETION_MODEL = "gpt-3.5-turbo"

// Function to extract text from HTML content
const extractHTML = (htmlContent) => {
	// You can perform any necessary processing on the HTML content here
	// For simplicity, we'll just return it as is
	return htmlContent;
};

export const getCompletion = async (prompt) => {
	const completion = await openai.createChatCompletion({
		model: OPEN_AI_CHAT_COMPLETION_MODEL,
		messages: [{ role: "user", content: prompt }],
		max_tokens: 2000,
		temperature: 0.7
	});

	const htmlContent = completion.data.choices[0].message.content;
	const extractedHTML = extractHTML(htmlContent);

	return extractedHTML;
}


// const OPEN_AI_COMPLETION_MODEL = "text-davinci-003"
//
// export const getCompletion = async (prompt) => {
// 	const completion = await openai.createCompletion({
// 		model: OPEN_AI_COMPLETION_MODEL,
// 		prompt: prompt,
// 		max_tokens: 2000,
// 		temperature: 0.7
// 	});
// 	return JSON.parse(completion.data.choices[0].text)
// }