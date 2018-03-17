import React from 'react';
import { shallow } from 'enzyme';
import User from '../../components/User';
import users from '../fixtures/users';

test('should render User correctly', () => {
  const wrapper = shallow(<User userData={users[0]} />);
  expect(wrapper).toMatchSnapshot();
});