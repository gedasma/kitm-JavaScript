
import './recipeCard.scss'
import clockIcon from '../../resources/clock.svg'
import personIcon from '../../resources/miniPerson.svg'
import statsIcon from '../../resources/stats.svg'
function RecipeCard(props) {
  return (
    <div className="recipeCard">
            <div className="recipeCard__visualInfo">
                <img className="recipeCard__visualInfo__image" src={props.recipe.strMealThumb} alt="Your Image"/>
                <div className="recipeCard__visualInfo__stats">
                    <div className="recipeCard__visualInfo__stats__point">
                      <img className="recipeCard__visualInfo__stats__point__image" src={clockIcon} alt="clockIcon"/>
                        {props.recipe.strCategory}
                    </div>
                    <div className="recipeCard__visualInfo__stats__point">
                      <img className="recipeCard__visualInfo__stats__point__image" src={personIcon} alt="personIcon"/>
                        {props.recipe.strArea}
                    </div>
                    <div className="recipeCard__visualInfo__stats__point">
                      <img className="recipeCard__visualInfo__stats__point__image" src={statsIcon} alt="statsIcon"/>
                        {props.recipe.idMeal}
                    </div>
                </div>
            </div>
            <div className="recipeCard__textInfo">
                <h4>{props.recipe.strMeal}</h4>
                <a href={"/recipe/" + props.recipe.idMeal}>View Recipe</a>
            </div>
        </div>
  );
}

export default RecipeCard;