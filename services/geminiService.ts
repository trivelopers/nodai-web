
import { GoogleGenAI } from "@google/genai";

export async function getComplexAnalysis(prompt: string): Promise<string> {
  if (!process.env.API_KEY) {
    throw new Error("API_KEY environment variable not set");
  }

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    
    const systemInstruction = `You are Nodai AI, an expert consultant for a tech company called Nodai. 
Nodai specializes in:
1.  **Applied Artificial Intelligence:** Creating custom AI models to analyze data and optimize business decisions.
2.  **Process Automation:** Designing intelligent workflows to eliminate repetitive tasks and boost efficiency.
3.  **Online Schedulers:** Developing simple and professional appointment management systems.
4.  **Custom Software:** Building robust, scalable, and integrated software solutions.

When a user asks a complex question, provide a detailed, structured, and insightful analysis of how Nodai's services can be applied to solve their problem or improve their business. Frame your response as a strategic recommendation. Use markdown for formatting.`;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        thinkingConfig: { thinkingBudget: 32768 },
      },
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API call failed:", error);
    if (error instanceof Error) {
      return `An error occurred while contacting the AI model: ${error.message}. Please check your API key and network connection.`;
    }
    return "An unknown error occurred while contacting the AI model.";
  }
}
