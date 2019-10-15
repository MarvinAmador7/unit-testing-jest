import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import { FavoriteNumber } from '../FavoriteNumber';

test('renders a input with a label "favorite Number"', () => {
  const {getByLabelText, debug, container } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
  debug(container)
});

