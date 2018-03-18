import { initialFiltersState, filters } from '../../reducers/filters';

test('should set filters reducer default state', () => {
  const state = filters(undefined, { type: '@@INIT' });
  expect(state).toEqual(initialFiltersState);
});

test('should set order by filter', () => {
  const action = {
    type: 'SET_ORDER_BY',
    orderBy: 'asc',
  };
  const state = filters(initialFiltersState, action);
  expect(state).toEqual({
    text: '',
    orderBy: 'asc',
  });
});

test('should set text filter', () => {
  const action = {
    type: 'SET_TEXT_FILTER',
    text: 'test text',
  };
  const state = filters(initialFiltersState, action);
  expect(state).toEqual({
    text: 'test text',
    orderBy: undefined,
  });
});
