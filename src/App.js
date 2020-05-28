import React, {useEffect} from 'react';
import './App.css';

const App = () => {
  const APP_ID = "d7b32178"
  const APP_KEY = "435917edadca3f7b8f382332e69ca819"

  useEffect(() => {
    getRecipes();
  }, [])

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
  }

  return (
     <div className="App">
       <form className="search-form">
         <input className="search-bar" type="text"></input>
         <button className="search-button" type="submit">Search</button>
       </form>
     </div>
  );
}

export default App;
