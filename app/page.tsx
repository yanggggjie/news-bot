import { generateText } from "ai";
import { openAIProvider } from "./lib/ai/openai_provider";

export default async function Home() {
  const { text } = await generateText({
    model: openAIProvider('gpt-4o-mini'),
    system: 'You are a friendly assistant!',
    prompt: 'Why is the sky blue?',
  });

  console.log(text)
  

  return (
    <div>
      <h1>Hello World</h1>
      {text}
    </div>
  );
}
