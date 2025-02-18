import { createOpenAI } from '@ai-sdk/openai'

export const openAIProvider = createOpenAI({
  compatibility: 'strict', // strict mode, enable when using the OpenAI API
  baseURL: process.env.AI_BASE_URL,
  apiKey: process.env.AI_SK,
})
