import './App.css';
import React from 'react';
import { getRecipe } from './ai';
import ReactMarkdown from 'react-markdown';
export default function Main() {

    const [ingredients, setIngredients] = React.useState([]);
    const [recipe, setRecipe] = React.useState('');


    const ingredientsListItems = ingredients.map(ingredients => (
        <li key={ingredients}>{ingredients}</li>
    ))

    function handleSubmit(formData) {
        const newIngredient = formData.get("ingredients").trim();
        if(!newIngredient) return;
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
    const [loading, setLoading] = React.useState(false);

    async function handleGetRecipeClick() {
    setLoading(true);
    try {
        const recipeMarkdown = await getRecipe(ingredients);
        setRecipe(recipeMarkdown);
    } catch (error) {
        console.error("Failed to get recipe:", error);
    } finally {
        setLoading(false);
    }
}


    return (
        <>
            <main className='main'>
                <form className='ingredients-form' action={handleSubmit}>
                    <input
                        type="text"
                        name='ingredients'
                        placeholder="E.g. origano"
                        aria-label="Add ingredients"
                    />
                    <button ><span>&#43;</span> Add ingredients</button>

                </form>

                <section className='printed-section'>
                    <h2 aria-live='polite'>Ingredients on hand: </h2>
                    <ul>{ingredientsListItems}</ul>
                </section>

                {ingredients.length > 3 && (
                    <section className="recipe-container">
                        <div className="recipe-text">
                            <h3>Ready for a recipe?</h3>
                            <p>Generate a recipe from your list of ingredients.</p>
                        </div>

                        <button className="recipe-btn" onClick={handleGetRecipeClick}>
                            {loading ? "Loading..." : "Get a recipe"}
                        </button>
                    </section>
                )}

                {recipe && (
                        <section className='suggested-recipe-container'>
                            <ReactMarkdown>{recipe}</ReactMarkdown>
                        </section>
                    )}
            </main>
        </>
    )
}