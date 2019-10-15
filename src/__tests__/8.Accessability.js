import React from 'react';
import {render} from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';

expect.extend(toHaveNoViolations);

function InaccessibleForm() {
  return (
    <form>
      <input placeholder="username" name="username" />
    </form>
  )
}

function AccessibleForm() {
  return (
    <form>
      <label htmlFor="username">Username</label>
      <input id="username" placeholder="username" name="username" />
    </form>
  )
}

test('accessible forms pass axe', async () => {
  const {container} = render(<AccessibleForm />);
  expect(await axe(container.innerHTML)).toHaveNoViolations();
})
