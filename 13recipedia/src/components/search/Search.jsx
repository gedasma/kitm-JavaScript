import { useEffect } from "react"
import { useState } from "react"

const Search = (props)=> {

    const [recipes, setRecipes] = useState([])

    useEffect(()=>{
        if(props.searchStatement){
            try{
                fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.searchStatement}`)
                .then(response=>response.json())
                .then(data=>setRecipes(data.meals))
                
              }
              catch(msg){
                console.log("Recepto nera! " + msg)
              }
        }
    }, [props.searchStatement]);
    
    const handleInputChange = (e)=>{
        let selectedValue = e.target.value
        let selectedRecipe = recipes.find((recipe) => recipe.strMeal === selectedValue);
        props.setSearchStatement(selectedRecipe ? selectedRecipe.idMeal : '')
    }

    return (
      <>
        <input onChange={handleInputChange} type="text" name="" list="recipes" placeholder="Search recipe..."/>
        {recipes?
        (
        <datalist id="recipes">
            {recipes.map((recipe)=>
                <option key={recipe.idMeal} value={recipe.strMeal}></option>
            )}
        </datalist>
        ):
        (<></>)
        }
      </>
    );
  }
  
  export default Search;
  