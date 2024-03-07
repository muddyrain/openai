import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: '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',
  timeout: 5 * 1000,
});

async function main() {
  try{
    const completion = await openai.chat.completions.create({
      messages: [{ role: "system", content: "You are a helpful assistant." }],
      model: "gpt-3.5-turbo",
    },);

    console.log(completion.choices[0]);
  }
  catch (err){
    console.log(err);
  }
}

main();
