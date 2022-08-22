import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Hi/);
  expect(headerElement).toBeInTheDocument();
});

test('renders subtitle', () => {
  render(<App />);
  const headerElement = screen.getByText(/I'm Kristian/);
  expect(headerElement).toBeInTheDocument();
});
