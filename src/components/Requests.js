import { findRecipes } from '../Api';

export function getRecipes(query) {
  return findRecipes(query);
}