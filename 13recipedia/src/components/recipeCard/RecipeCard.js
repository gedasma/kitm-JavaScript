import {Card, Button} from 'react-bootstrap';
import './recipeCard.scss'
import recipeImage from '../../resources/recipeImage1.png'
import clockIcon from '../../resources/clock.svg'
import personIcon from '../../resources/miniPerson.svg'
import statsIcon from '../../resources/stats.svg'
function RecipeCard({recipeCardObject}) {
  return (
    <div className="recipeCard">
            <div className="recipeCard__visualInfo">
                <img className="recipeCard__visualInfo__image" src={recipeImage} alt="Your Image"/>
                <div className="recipeCard__visualInfo__stats">
                    <div className="recipeCard__visualInfo__stats__point">
                      <img className="recipeCard__visualInfo__stats__point__image" src={clockIcon} alt="clockIcon"/>
                        10 Mins
                    </div>
                    <div className="recipeCard__visualInfo__stats__point">
                      <img className="recipeCard__visualInfo__stats__point__image" src={personIcon} alt="personIcon"/>
                      5 Serving
                    </div>
                    <div className="recipeCard__visualInfo__stats__point">
                      <img className="recipeCard__visualInfo__stats__point__image" src={statsIcon} alt="statsIcon"/>
                      easy
                    </div>
                </div>
            </div>
            <div className="recipeCard__textInfo">
                <h4>recipe title</h4>
                <a href='#'>View Recipe</a>
            </div>
        </div>
  );
}

export default RecipeCard;