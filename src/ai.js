export async function getRecipe(ingredients) {
    const response = await fetch("/api/recipe", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ingredients
        })
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(
            data.error || "Failed to generate a recipe."
        );
    }

    return data.recipe;
}