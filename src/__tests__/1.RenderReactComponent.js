import React from 'react';
import ReactDOM from 'react-dom';
import {FavoriteNumber} from '../FavoriteNumber';

test('renders a input with a label "favorite Number"', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FavoriteNumber />, div);
  expect(div.querySelector('input').type).toBe('number');
  expect(div.querySelector('label').textContent).toBe('Favorite Number');
});
