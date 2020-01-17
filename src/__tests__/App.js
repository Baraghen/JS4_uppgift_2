import React from 'react';
import { shallow, render } from 'enzyme';
import App from "../App";
import { getRecipes } from "../components/Requests";
import Recipe from "../components/Recipe";

jest.mock('../Api');

beforeEach(() => {
  jest.resetModules();
});

test('if possible to get recipe from query', () => {
  expect.assertions(1);
  return getRecipes('meat').then(recipe => {
    expect(recipe.length).toBe(2);
  })
});

test('if search bar renders', () => {
  const app = shallow(<App/>);

  expect(app.find('input')).toHaveLength(1);
});

test('if search button renders', () => {
  const app = shallow(<App/>);

  expect(app.find('button')).toHaveLength(1);
});

test('if the search field gets cleared after search', () => {
  const app = shallow(<App/>);
  app.find('input').simulate('change', {
    target: {value: 'Test Sentence'}
  });
  expect(app.state().search).toMatch('Test Sentence');

  app.find('button').simulate('click');
  expect(app.state().search).toMatch('');
});

test('if the search state is saved', () => {
  const app = shallow(<App/>);
  app.find('input').simulate('change', {
    target: {value: 'Test Sentence'}
  });
  expect(app.state().search).toMatch('Test Sentence');
});