import React from 'react';
import { render } from 'enzyme';
import Recipe from "../components/Recipe";

test('if the recipe is rendered and style is added to container DIV', () => {
  const ingredients = [
      {
        "text": "8 pasta things",
        "weight": 344
      },
      {
        "text": "2 vegetables",
        "weight": 500
      }
    ];
  const wrapper = render(<Recipe label="test" image="../src/assets/food.jpg" ingredients={ingredients}/>);
  expect(wrapper.hasClass('recipe')).toBeTruthy();
})