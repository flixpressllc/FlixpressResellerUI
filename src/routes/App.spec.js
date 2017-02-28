import React from 'react';
import { mount } from 'enzyme';
import App from './App';

jest.mock('../utils/auth');

it('renders without crashing', () => {
  expect(() => mount(<App />)).not.toThrow();
});
