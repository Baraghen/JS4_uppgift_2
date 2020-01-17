import fetch from "node-fetch";

const APP_ID = '3b89091e';
const APP_KEY = '5b1df4bbc8b61b7a17274cff8f495b44';

export function findRecipes(query) {
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
  return fetch(url)
    .then(response => response.json())
    .then(json => json.hits)
};