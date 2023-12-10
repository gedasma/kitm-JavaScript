import RecipeCard from "../recipeCard/RecipeCard";
import Button from "../button/Button";
import './main.scss'

const Main = ()=>{
    return (
    <main className="container recipes">
        <div className="recipes__headline">
            <div className="recipes__headline__text">
                <h2>Discover, Create, Share</h2>
                <h3>Check our most popular recipes of this week</h3>
            </div>
            <Button buttonText="See All" refLink="#"/>
        </div>
        <div className="recipes__cards">
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
            <RecipeCard/>
        </div>
        
    </main>
    );
}

export default Main