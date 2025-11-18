import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

// TC_1: Show default initial count
test('shows count 0 by default when no initial prop is provided', () => {
  render(<Counter />);

  // The text should be "Count: 0"
  expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0');
});

// TC_2: Increment count when button is clicked
test('increments count from 0 to 1 when the button is clicked', async () => {
  const user = userEvent.setup();

  render(<Counter initial={0} />);

  // Initial state
  expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 0');

  // Click the button once
  await user.click(screen.getByRole('button', { name: /increment/i }));

  // After click → Count: 1
  expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 1');
});

// TC_3: Start from provided initial value
test('starts from the provided initial value (e.g. 5)', () => {
  render(<Counter initial={5} />);

  // It should show the initial value from props
  expect(screen.getByText(/count:/i)).toHaveTextContent('Count: 5');
});