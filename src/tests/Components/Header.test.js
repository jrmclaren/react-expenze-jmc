import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Header } from '../../Components/Header';


test(' should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={() => {
  }} />);
  expect(wrapper).toMatchSnapshot();
//expect(wrapper.find('h1').text()).toBe(' Expenszes ');
// const renderer = new ReactShallowRenderer();
// renderer.render(<Header />);
// expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test(' should call startLogout on button Click ', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout={startLogout} />);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});