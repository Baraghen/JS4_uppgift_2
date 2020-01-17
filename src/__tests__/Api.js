import { findRecipes } from "../Api";

test('Test getting results from api', () => {
  return findRecipes('meat').then(data => {
    expect(data[0].recipe.label.toLowerCase()).toContain('meat');
  })
});