import fetch from "node-fetch";

export function findRecipes() {
  const url = `http://localhost:3004/query`
  return fetch(url)
    .then(response => response.json())
    .then(json => json.hits)
};