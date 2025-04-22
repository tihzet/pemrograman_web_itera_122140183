import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header with app title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Manajemen Buku Pribadi/i);
  expect(headerElement).toBeInTheDocument();
});