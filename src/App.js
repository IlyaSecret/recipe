import React, {useEffect, useState} from "react";
import './App.css';
import Recipe from "./Recipe";

function App() {

  const APP_ID = "bd444cb3";
  const APP_KEY = "47e4f952e2b2d398317cfaab60825d0b";
  
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState("chicken");
  useEffect(() => {
    getRecipes();
  }, [query])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <div className="header">
        <form className="search-form" onSubmit={getSearch}>
          <input type="text" className='search-bar' value={search} onChange={updateSearch} placeholder="Напишите название блюда"></input>
          <button type="submit" className='search-button'>
            Найти
          </button>
        </form>
      </div>
      <div className="recipes-list">
        {recipes.map(recipe => (
          <Recipe 
          key={recipe.recipe.label}
          title={recipe.recipe.label} 
          calories={recipe.recipe.calories} 
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
