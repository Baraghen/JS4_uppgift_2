import React from 'react';
import { shallow, mount } from 'enzyme';
import App from "../App";
import { getRecipes } from "../components/Requests";

jest.mock('../Api');

beforeEach(() => {
  jest.resetModules();
});

test('if state recipe updated with response from api', () => {
  const app = mount(<App/>);
  app.setState({search: 'meat'});
  expect(app.state().search).toMatch('meat');
  app.instance().getSearch({
    preventDefault: () => {
    }
  });
  app.update();
  expect(app.state().recipes).toHaveLength(2);
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