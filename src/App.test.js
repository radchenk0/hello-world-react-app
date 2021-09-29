import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks REACT_APP_NODE_ENV value', () => {
  render(<App />);
  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  const isProduction = nodeEnv === 'production';
  const element = screen.getByText(isProduction ? /production/i : /staging/i);
  console.log(element.id);
  console.log(element.textContent);
  expect(element).toBeInTheDocument();
});
