import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: process.env['AI_SK'], // This is the default and can be omitted
  baseURL: process.env['AI_BASE_URL'],
});

export async function main() {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: 'Say hello world' }],
    model: 'gpt-4o',
  });
  return chatCompletion
}

