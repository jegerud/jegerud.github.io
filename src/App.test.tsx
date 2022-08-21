import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Welcome/);
  expect(headerElement).toBeInTheDocument();
});

test('renders subtitle', () => {
  render(<App />);
  const headerElement = screen.getByText(/Nothing to see here.../);
  expect(headerElement).toBeInTheDocument();
});
