import React from 'react';
import { shallow } from 'enzyme';
import { UserSinglePageField } from '../../components/UserSinglePageField';
import users from '../fixtures/users';

test('should render correctly when isEditable is false and isUpdate state is false ', () => {
  const wrapper = shallow(<UserSinglePageField data={users[0].email} isEditable={false} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle update button on click and render correctly', () => {
  const wrapper = shallow(<UserSinglePageField data={users[0].email} isEditable={true} />);
  wrapper.find('a').simulate('click');
  expect(wrapper.state('isUpdate')).toBe(true);
  expect(wrapper).toMatchSnapshot();
})

