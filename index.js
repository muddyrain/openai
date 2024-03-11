import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: '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',
  timeout: 5 * 1000,
});

async function main() {
  const stream = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'user', content: 'Say this is a test' }],
    stream: true,
  });
  for await (const chunk of stream) {
    process.stdout.write(chunk.choices[0]?.delta?.content || '');
  }
}

main();