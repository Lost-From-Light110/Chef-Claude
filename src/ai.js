import {GoogleGenAI} from "@google/genai";

const ai = new GoogleGenAI({
    apiKey : import.meta.env.VITE_GEMINI_API_KEY
});

export async function getRecipe(ingredients){
    const prompt =
        `You are a professional chef
        Create a delicious recipe using the ingredients whenever possible
        Ingredients : ${ingredients.join(',')}
        Return the recipe in a markdown format with:
        #Recipe Name
        ##Ingredients
        ##Instructions
        Keep it concise and easy to follow
    `
    const response = await ai.models.generateContent({
    model: "gemini-flash-latest",
    contents: prompt
})

return response.text;
}

