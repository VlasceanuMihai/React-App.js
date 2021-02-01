import { render, screen } from '@testing-library/react';
import App from './App';
import Hello from './Hello';

test('first react app', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('hello', () => {
//   render(<Hello />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });