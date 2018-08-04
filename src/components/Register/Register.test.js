import React from 'react';
import { shallow } from 'enzyme';
import Register from './Register';

it('renders without crashing', () => {
  shallow(<Register />);
});

// it('renders form', () => {
//   const wrapper = shallow(<Register />);
//   const form = <form />;
//   expect(wrapper.contains(form)).toEqual(true);
// });
