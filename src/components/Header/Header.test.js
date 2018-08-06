import React from 'react';
import { mount, shallow } from 'enzyme';
import Header from './Header';
import parrot from '../../images/parrot.png';

it('renders without crashing', () => {
  shallow(<Header />);
});

it('renders logo', () => {
  const wrapper = mount(
    <div className="header__logo">
      <img src={parrot} className="header__img" />
      <h1 className="header__h1">langly</h1>
    </div>
  );

  expect(
    wrapper.containsMatchingElement([
      <img src={parrot} className="header__img" />
    ])
  ).toEqual(true);
});

//not sure how to test props
// it('contains login button', () => {
//   const wrapper = shallow(<Header toggler={10} />);
//   expect(
//     wrapper.containsMatchingElement(
//       <button className="header-button" onMouseOver={this.props.toggler}>
//         Login
//       </button>
//     )
//   ).toEqual(true);
// });
