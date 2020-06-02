import React, {useEffect, useState} from 'react';
import Recipe from './recipe';
import './App.css';

const App = () => {
  const APP_ID = "d7b32178"
  const APP_KEY = "435917edadca3f7b8f382332e69ca819"

  const [recipes, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken")

  const changeSearch = (e) => {
    setSearch(e.target.value)
  }

  useEffect(() => {
    getRecipes(query);
  }, [query])

  const handleSubmit = (e) => {
    e.preventDefault();

    setQuery(search);

    setSearch("")
  }


  const getRecipes = async (query) => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()

    setRecipe(data.hits);

    console.log(data.hits)
  }

  return (
     <div className="App">
       <form className="search-form" onSubmit={handleSubmit}>
         <input className="search-bar" type="text" value={search} onChange={changeSearch}></input>
         <button className="search-button" type="submit">Search</button>
       </form>
       <div className="recipes">
        {
          recipes.map(recipe => (
            <Recipe
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))
        }
       </div>
     </div>
  );
}

export default App;
