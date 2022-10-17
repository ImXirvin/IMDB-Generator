const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);



export default async (req, res_title) => {

  

   let prompt = `Create a unique movie name in which movie has the the main character as ${req.body.name} and is set in ${req.body.setting_title}. Make the name similar to other movies with a  ${req.body.genre_title} style genre.`;
   console.log(prompt)
  
   const gptResponse = await openai.complete({
    engine: 'text-davinci-002',
    prompt: prompt,
    maxTokens: 150,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1
});

  res_title.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}