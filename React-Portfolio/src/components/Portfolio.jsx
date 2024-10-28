import Project from './Project.jsx'
import '../styles/Project.css'

// image imports
import recipeImage from '../images/recipeSite.png'

export default function Portfolio() {

    return (
      <div className="team-grid">
        <div className="container">
          <div className="row people d-flex justify-content-center">
            <Project image={recipeImage} repoLink='https://github.com/Caryndcarter/recipe-book' deployedLink='https://caryndcarter.github.io/recipe-book/' />
            <Project image={recipeImage} repoLink='https://github.com/Caryndcarter/recipe-book' deployedLink='https://caryndcarter.github.io/recipe-book/' />
            <Project image={recipeImage} repoLink='https://github.com/Caryndcarter/recipe-book' deployedLink='https://caryndcarter.github.io/recipe-book/' />
            <Project image={recipeImage} repoLink='https://github.com/Caryndcarter/recipe-book' deployedLink='https://caryndcarter.github.io/recipe-book/' />
            <Project image={recipeImage} repoLink='https://github.com/Caryndcarter/recipe-book' deployedLink='https://caryndcarter.github.io/recipe-book/' />
            <Project image={recipeImage} repoLink='https://github.com/Caryndcarter/recipe-book' deployedLink='https://caryndcarter.github.io/recipe-book/' />
          </div>
        </div>
      </div>
    );
  }