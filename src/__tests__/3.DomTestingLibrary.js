import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import ReactDOM from 'react-dom';
import { queries, getQueriesForElement } from '@testing-library/dom';
import { FavoriteNumber } from '../FavoriteNumber';

test('renders a input with a label "favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);

  const input = queries.getByLabelText(div, 'Favorite Number');
  expect(input).toHaveAttribute('type', 'number');
});

// More resilient
// Use regex for lowering the text. As the casing changes, our test continue to pass
test('renders a input with a label "favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);

  const input = queries.getByLabelText(div, /favorite number/i);
  expect(input).toHaveAttribute('type', 'number');
});

// getQueriesForElement will be scoped down to this div
// getByLabelText will ensure relationship between the input and the label elements
test('renders a input with a label "favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);

  const { getByLabelText } = getQueriesForElement(div);

  const input = getByLabelText(/favorite number/i);
  expect(input).toHaveAttribute('type', 'number');
});

// With that, we're ensuring that the input has a label favorite number,
// and if that relationship between the input and its label is ever broken,
// then our test will break as well. Giving us more confidence that
// our application is working the way that these are expects to do.


