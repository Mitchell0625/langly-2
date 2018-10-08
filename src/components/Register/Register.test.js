import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Register from './Register';

it('renders without crashing', () => {
  shallow(<Register />);
});

it('renders form', () => {
  const wrapper = document.createElement('div');
  ReactDOM.render(<Register />, wrapper);
  expect(wrapper.contains(form)).toEqual(true);
});
