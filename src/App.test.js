import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('checks REACT_APP_NODE_ENV value', () => {
  const nodeEnv = process.env.REACT_APP_NODE_ENV;
  console.log(nodeEnv);
  expect(nodeEnv).toEqual('staging');
});
