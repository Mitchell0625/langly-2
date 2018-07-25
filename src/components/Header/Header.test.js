import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("renders without crashing", () => {
  shallow(<Header />);
});

it("renders logo", () => {
  const wrapper = shallow(<Header />);
  const logo = <h1>langly</h1>;
  expect(wrapper.contains(logo)).toEqual(true);
});
