
const OpenAI = require('openai-api');
const openai = new OpenAI(process.env.OPENAI_API_KEY);



export default async (req, res) => {

 
   let prompt = `Make a movie plot for the character ${req.body.name} set in ${req.body.setting}, with a ${req.body.genre} style genre`;
   v
   const gptResponse = await openai.complete({
    engine: 'text-davinci-002',
    prompt: prompt,
    maxTokens: 250,
    temperature: 0.7,
    topP: 1,
    presencePenalty: 0,
    frequencyPenalty: 0.5,
    bestOf: 1,
    n: 1
});

  res.status(200).json({text: `${gptResponse.data.choices[0].text}`})
}

