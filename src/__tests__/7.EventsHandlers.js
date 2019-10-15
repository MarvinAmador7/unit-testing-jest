import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FavoriteNumber } from '../FavoriteNumber';

test('entering an invalid value shows an error message', () => {
  const { getByLabelText, getByTestId } = render(<FavoriteNumber />);

  const input = getByLabelText(/favorite number/i);

  fireEvent.change(input, {target: {value: 10}});

  expect(getByTestId('error-message')).toHaveTextContent(
    /the number is invalid/i,
  );

});

// queryByTestId returns null instead of throwing errors this allows us to check for none appearing elements
test('entering an valid value shows nothing', () => {
  const { queryByTestId } = render(<FavoriteNumber max={10} />);

  expect(queryByTestId('error-message')).toBeNull();

});
