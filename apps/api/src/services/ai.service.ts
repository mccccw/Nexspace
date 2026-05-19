const systemPrompt = `Du bist NexAI, der AI-Assistent von NexSpace.
Du hilfst Usern mit:
- Texte verbessern und zusammenfassen
- Code debuggen und erklären
- Ideen für Projekte und Posts generieren
- Fragen zur Plattform beantworten
Antworte immer hilfreich, präzise und in der Sprache des Users.`;

export const aiService = {
  chat: async (input: string) => ({
    provider: process.env.AI_PROVIDER ?? "anthropic",
    message: `NexAI Echo: ${input}`,
    systemPrompt
  })
};
