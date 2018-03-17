import React from 'react';
import { shallow } from 'enzyme';
import { UserSinglePage } from '../../components/UserSinglePage';
import users from '../fixtures/users';

test('should render UserSinglePage correctly', () => {
  const wrapper = shallow(<UserSinglePage user={users[0]} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle Back to dashbord button on click', () => {
  const history = { push: jest.fn() };
  const wrapper = shallow(<UserSinglePage user={users[0]} history={history} />);
  wrapper.find('Button').simulate('click');
  expect(history.push).toHaveBeenLastCalledWith('/');
});