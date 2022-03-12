import { render, screen } from '@testing-library/react';
import App from './App';

describe('Async component', () => { 
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.queryByText(/learn react/i);
    expect(linkElement).toBeNull();
  });

  test('render async list', async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'red'}]
    })
    render(<App />);
    
    const listElements = await screen.findAllByRole('listitem');
    expect(listElements).not.toHaveLength(0);
  })
 })
