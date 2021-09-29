import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks REACT_APP_NODE_ENV value', () => {
  render(<App />);
  const isProduction = process.env.REACT_APP_IS_PRODUCTION === 'true';
  const element = screen.getByText(isProduction ? /production/i : /staging/i);
  console.log(element.id);
  console.log(element.textContent);
  expect(element).toBeInTheDocument();
});
