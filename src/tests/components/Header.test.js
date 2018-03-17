import React from 'react';
import { shallow } from 'enzyme';
import { Header } from '../../components/Header';

test('should render Header correctly when orderBy is undefined', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
});

test('should render Header correctly when orderBy is defined', () => {
  const wrapper = shallow(<Header orderBy={'asc'} />);
  expect(wrapper).toMatchSnapshot();
});

test('should handle orderBy button click', () => {
  const setOrderBySpy = jest.fn();
  const wrapper = shallow(<Header setOrderBy={setOrderBySpy} />);
  wrapper.find('#ascButton').simulate('click');
  expect(setOrderBySpy).toHaveBeenLastCalledWith('asc');
});

test('should handle setText correctly', () => {
  const setTextSpy = jest.fn();
  const value = 'test';
  const wrapper = shallow(<Header setText={setTextSpy} />);
  wrapper.find('Input').simulate('change', {
    target: { value }
  });
  expect(setTextSpy).toHaveBeenLastCalledWith(value);
});