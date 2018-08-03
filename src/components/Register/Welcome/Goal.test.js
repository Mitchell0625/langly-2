import React from 'react';
import { shallow } from 'enzyme';
import Goal from './Goal';

it('renders without crashing', () => {
  shallow(<Goal />);
});

it('has radio button', () => {
  const wrapper = shallow(<Goal />);
  const radio = <input name="goal" type="radio" />;
  expect(wrapper.contains(radio)).toEqual(true);
});
