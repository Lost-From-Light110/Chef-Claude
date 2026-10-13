import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({
    apiKey: import.meta.env.VITE_GEMINI_API_KEY
});

export async function getRecipe(ingredients) {
    const prompt = `
        You are a professional chef.
        Create a delicious recipe using the provided ingredients whenever possible.

        Ingredients: ${ingredients.join(", ")}

        Return a concise Markdown recipe with:
        # Recipe Name
        ## Ingredients
        ## Instructions

        Keep the recipe practical and easy to follow.
    `;

    const startTime = performance.now();

    console.time("Gemini API request");

    try {
        const response = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: prompt
        });

        console.timeEnd("Gemini API request");

        console.log(
            `Total Gemini request time: ${
                ((performance.now() - startTime) / 1000).toFixed(2)
            } seconds`
        );

        return response.text;
    } catch (error) {
        console.timeEnd("Gemini API request");
        console.error("Gemini request failed:", error);
        throw error;
    }
}