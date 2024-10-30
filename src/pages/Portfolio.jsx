import Project from "../components/Project.jsx";
import "../styles/Portfolio.css";

export default function Portfolio() {
  return (
    <div className="team-grid">
      <div className="container">
        <h1>Portfolio</h1>
        <div className="row people d-flex justify-content-center">
          <Project
            title="Custom Recipe Book"
            subtitle="HTML, CSS, JavaScript"
            image="/recipeSite.png"
            repoLink="https://github.com/Caryndcarter/recipe-book"
            deployedLink="https://caryndcarter.github.io/recipe-book/"
          />
          <Project
            title="Custom Recipe Book"
            subtitle="HTML, CSS, JavaScript"
            image="/recipeSite.png"
            repoLink="https://github.com/Caryndcarter/recipe-book"
            deployedLink="https://caryndcarter.github.io/recipe-book/"
          />
          <Project
            title="Custom Recipe Book"
            subtitle="HTML, CSS, JavaScript"
            image="/recipeSite.png"
            repoLink="https://github.com/Caryndcarter/recipe-book"
            deployedLink="https://caryndcarter.github.io/recipe-book/"
          />
          <Project
            title="Custom Recipe Book"
            subtitle="HTML, CSS, JavaScript"
            image="/recipeSite.png"
            repoLink="https://github.com/Caryndcarter/recipe-book"
            deployedLink="https://caryndcarter.github.io/recipe-book/"
          />
          <Project
            title="Custom Recipe Book"
            subtitle="HTML, CSS, JavaScript"
            image="/recipeSite.png"
            repoLink="https://github.com/Caryndcarter/recipe-book"
            deployedLink="https://caryndcarter.github.io/recipe-book/"
          />
          <Project
            title="Custom Recipe Book"
            subtitle="HTML, CSS, JavaScript"
            image="/recipeSite.png"
            repoLink="https://github.com/Caryndcarter/recipe-book"
            deployedLink="https://caryndcarter.github.io/recipe-book/"
          />
        </div>
      </div>
    </div>
  );
}
