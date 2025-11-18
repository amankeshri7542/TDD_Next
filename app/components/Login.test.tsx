import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Login } from './Login';

// TC_LOGIN_1: Test that the component renders a login form
test('renders a login form with "Login" and "Sign up" buttons', () => {
  render(<Login />);

  // Check if the "Login" button is present
  expect(screen.getByRole('button', { name: /login/i })).toBeInTheDocument();

  // Check if the "Sign up" button is present
  expect(screen.getByRole('button', { name: /sign up/i })).toBeInTheDocument();
});

// TC_LOGIN_2: Test that the component shows a "You are logged in." message after the "Login" button is clicked
test('shows a "You are logged in." message after clicking the "Login" button', async () => {
  const user = userEvent.setup();
  render(<Login />);

  // Click the "Login" button
  await user.click(screen.getByRole('button', { name: /login/i }));

  // Check if the "You are logged in." message is present
  expect(screen.getByText(/you are logged in/i)).toBeInTheDocument();
});
