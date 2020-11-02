import { render, screen } from '@testing-library/react';
import Charts from './Charts';

test('renders learn react link', () => {
  render(<Charts />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
