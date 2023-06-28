import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Navbar from '../components/NavBar';

describe('Navbar Should render as expected', () => {
  it('should work as expected', () => {
    const result = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>,
    );
    expect(result).toMatchSnapshot();
  });
});