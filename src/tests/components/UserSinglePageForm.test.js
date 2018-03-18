import React from 'react';
import { shallow } from 'enzyme';
import UserSinglePageForm from '../../components/UserSinglePageForm';
import users from '../fixtures/users';

test('should render UserSinglePageForm correctly', () => {
  const wrapper = shallow(<UserSinglePageForm data={users[0].email} />);
  expect(wrapper).toMatchSnapshot();
});

test('should set text in input change', () => {
  const value = 'test@example.com';
  const wrapper = shallow(<UserSinglePageForm data={users[0].email} />);
  wrapper.find('AutosizeInput').simulate('change', {
    target: { value },
  });
  expect(wrapper.state('text')).toBe(value);
});

test('should handle submit form correctly', () => {
  const value = 'test@example.com';
  const handleUpdateUserSpy = jest.fn();
  const wrapper = shallow(<UserSinglePageForm data={value} handleUpdateUser={handleUpdateUserSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { },
  });
  expect(handleUpdateUserSpy).toHaveBeenLastCalledWith(value);
});
