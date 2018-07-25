import React from "react";
import { shallow } from "enzyme";
import Landing from "./Landing";

it("renders without crashing", () => {
  shallow(<Landing />);
});

it("renders test", () => {
  const wrapper = shallow(<Landing />);
  const text = <h2>Learn a language for free. Forever.</h2>;
  expect(wrapper.contains(text)).toEqual(true);
});
