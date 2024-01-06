import './_recipePage.scss'
import { Link, Navigate, useParams } from "react-router-dom"
import { useEffect, useState} from "react";

const RecipePage = (props)=>{

    const {id} = useParams();

    

    const [recipeData, setRecipeData] = useState([])
    // const [search, setSearch] = useState("")
    useEffect(()=>{
        if(id){
            try{
                fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
                .then(response=>response.json())
                .then(data=>setRecipeData(data))
                
              }
              catch(msg){
                console.log("Recepto nera! " + msg)
              }
        }
    }, [id]);

    if(recipeData.meals){
        console.log(recipeData.meals[0])
    
    
    

    let youtubeLink = recipeData.meals[0].strYoutube
    let convertedLink = youtubeLink.slice(-11);
    let ingredientArray = Object.keys(recipeData.meals[0])
        .filter((key) => key.startsWith("strIngredient") && recipeData.meals[0][key] !== null && recipeData.meals[0][key] !== "")
        .map((key) => recipeData.meals[0][key]);
    let ingredientMeasurments = Object.keys(recipeData.meals[0])
    .filter((key) => key.startsWith("strMeasure") && recipeData.meals[0][key] !== null && recipeData.meals[0][key] !== "")
    .map((key) => recipeData.meals[0][key]);
    return(
        <div className="container recipePage">
            <h2 className='recipePage__name'>{recipeData.meals[0].strMeal}</h2>
            <div className="recipePage__mainInfo">
                <div className='recipePage__mainInfo__image'><img className='img-fluid object-fit-contain border rounded' src={recipeData.meals[0].strMealThumb} alt="" /></div>
                <div className='recipePage__mainInfo__ingredients'>
                    <h3>Ingredients:</h3>
                    <ul>
                        {ingredientArray.map((ingredient, index)=>
                            <li key={ingredient} className='recipePage__mainInfo__ingredients__ingredient'>{ingredient + ": " + ingredientMeasurments[index]}</li>
                        )}
                    </ul>
                </div>
                
            </div>
            
            <div className="recipePage__secondaryInfo">
                <div className='recipePage__secondaryInfo__description'>
                <h3>Instructions:</h3>
                <p>{recipeData.meals[0].strInstructions}</p>
                </div>
                <iframe className='recipePage__secondaryInfo__youtube' width="100%" height="400px" src={`https://www.youtube.com/embed/${convertedLink}?si=RY68Qk5OgGDhoK3p`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
        </div>
    )
    }
}

export default RecipePage