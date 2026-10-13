import { GoogleGenAI } from "@google/genai";

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Method not allowed"
        });
    }

    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({
            error: "Gemini API key is not configured"
        });
    }

    const ingredients = req.body?.ingredients;

    if (
        !Array.isArray(ingredients) ||
        ingredients.length === 0 ||
        ingredients.length > 50 ||
        !ingredients.every(
            item => typeof item === "string" && item.trim().length > 0
        )
    ) {
        return res.status(400).json({
            error: "Please provide a valid list of ingredients."
        });
    }

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

    try {
        const ai = new GoogleGenAI({ apiKey });

        const response = await ai.models.generateContent({
            model: "gemini-flash-latest",
            contents: prompt
        });

        return res.status(200).json({
            recipe: response.text
        });
    } catch (error) {
        console.error("Gemini API error:", error);

        return res.status(500).json({
            error: "Failed to generate a recipe. Please try again."
        });
    }
}