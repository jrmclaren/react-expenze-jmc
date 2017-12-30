import React from 'react';
import { shallow } from 'enzyme';
import { LoginPage } from '../../Components/LoginPage';

test('should render login page with button', () => {
  const wrapper = shallow(<LoginPage  />);
  expect(wrapper).toMatchSnapshot();
});

test(' should call startLogin on button Click ', () => {
  const startLogin = jest.fn();
  const wrapper = shallow(<LoginPage  startLogin={startLogin} />);
  wrapper.find('button').simulate('click');
  expect(startLogin).toHaveBeenCalled();
});

