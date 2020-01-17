import React from 'react';
import Recipe from "./components/Recipe";
import { getRecipes } from "./components/Requests";
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);

      this.state = {
        recipes: [],
        search: '',
      };

      this.updateSearch = this.updateSearch.bind(this);
      this.getSearch = this.getSearch.bind(this);
  }

  updateSearch(e) {
    this.setState({search: e.target.value})
  };

  getSearch(e) {
    e.preventDefault();
    getRecipes(this.state.search)
      .then(results => {
        this.setState({recipes: results})
      })
    this.setState({search: ''})
  };

  render() {
    return(
      <div className="App">
        <form onSubmit={this.getSearch} className="search-form">
          <input className="search-bar" type="text" value={this.state.search} onChange={this.updateSearch}/>
          <button className="search-button" type="search">
            Search
          </button>
        </form>
        <div className="recipes">
        {this.state.recipes.map(recipe => (
          <Recipe
            title={recipe.recipe.label}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
        </div>
      </div>
    )
  }
};

export default App;