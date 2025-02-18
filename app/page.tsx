import { main } from "./lib/ai/openAI";

export default async function Home() {
  const chat = await main()

  return (
    <div>
      <h1>Hello World</h1>
      {
        JSON.stringify(chat)
      }
    </div>
  );
}
