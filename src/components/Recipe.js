import React from "react";
import style from "../recipe.module.css";

class Recipe extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className={style.recipe}>
        <h1>{this.props.title}</h1>
        <img className={style.image} src={this.props.image}/>
        <ol>
          {this.props.ingredients.map(ingredient => (
            <li>{ingredient.text}</li>
          ))}
        </ol>
      </div>
    );
  }
}

export default Recipe;