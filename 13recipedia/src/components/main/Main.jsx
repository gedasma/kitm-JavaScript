
import RecipeCard from "../recipeCard/RecipeCard";
import Button from "../button/Button";
import './main.scss'
import { Link, Navigate, useParams } from "react-router-dom"
import { useEffect, useState} from "react";
import * as service from "../../services/services";

const Main = ()=>{

    const {id} = useParams();
    const [recipeData, setRecipeData] = useState([])

    useEffect(()=>{
        if(id)
        {
            if(recipeData.length === 0)
            {
                let recipePromise = service.getMealsByCategory(id)
                recipePromise.then((result) => {
                    setRecipeData(result)
                });
            }
        }
        else
        {
            if(recipeData.length === 0)
            {
                let recipePromise = service.getRandomRecipes()
                recipePromise.then((result) => {
                    setRecipeData(result)
                });
            }
        }
        
    });

    return (
    <main className="container recipes">
        <div className="recipes__headline">
            <div className="recipes__headline__text">
                <h2>Discover, Create, Share</h2>
                {id ? 
                    (<h3>{id + " recipes:"}</h3>):
                    (<h3>Check our most popular recipes of this week</h3>)}
            </div>
            <Button buttonText="See All" refLink="#"/>
        </div>

        <div className="recipes__cards">
            {recipeData.map((recipe)=>
                <RecipeCard key={recipe.idMeal} recipe={recipe}/>
            )}
        </div>
        
    </main>
    );
}

export default Main