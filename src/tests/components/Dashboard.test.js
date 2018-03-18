import React from 'react';
import { shallow } from 'enzyme';
import { Dashboard } from '../../components/Dashboard';
import users from '../fixtures/users';

test('should render Dashboard correctly when isLoading is true', () => {
  const wrapper = shallow(<Dashboard isLoading />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Dashboard correctly when isLoading is false', () => {
  const wrapper = shallow(<Dashboard isLoading={false} users={users} />);
  expect(wrapper).toMatchSnapshot();
});
