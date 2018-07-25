import React from "react";
import { shallow } from "enzyme";
import Header from "./Header";

it("renders without crashing", () => {
  shallow(<Header />);
});

it("renders logo", () => {
  const wrapper = shallow(<Header />);
  const logo = <h1 className="header__h1">langly</h1>;
  expect(wrapper.contains(logo)).toEqual(true);
});

it("has selection box", () => {
  const wrapper = shallow(<Header />);
  const selector = (
    <select>
      <option value="English">English</option>
    </select>
  );
  expect(wrapper.contains(selector)).toEqual(true);
});
