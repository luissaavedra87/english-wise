import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Home from '../components/Home';

afterEach(cleanup);

it('renders ok', () => {
  const { asFragment } = render(<Home />);
  expect(asFragment()).toMatchSnapshot();
});

it('check for logout text', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('welcome-text')).toHaveTextContent('Welcome back to English Wise');
});

it('check for p text', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('info-text')).toHaveTextContent('If you are looking for a personal learning, search between our teachers and schedule a one hour class.');
});
