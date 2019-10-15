/*
 The jest-dom library provides really useful extensions to jest’s built-in
 assertion library that will make it easier for us to write our test assertions (like toHaveTextContent)

 Custom Matchers:

  toBeDisabled
  toBeEnabled
  toBeEmpty
  toBeInTheDocument
  toBeInvalid
  toBeRequired
  toBeValid
  toBeVisible
  toContainElement
  toContainHTML
  toHaveAttribute
  toHaveClass
  toHaveFocus
  toHaveFormValues
  toHaveStyle
  toHaveTextContent
  toHaveValue
*/


// import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { toHaveAttribute, toHaveTextContent } from '@testing-library/jest-dom';
import { FavoriteNumber } from '../FavoriteNumber';

expect.extend({ toHaveAttribute, toHaveTextContent });

test('renders a input with a label "favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);
  expect(div.querySelector('input')).toHaveAttribute('type', 'number');
  expect(div.querySelector('label')).toHaveTextContent('Favorite Number');
});
