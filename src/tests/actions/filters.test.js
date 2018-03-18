import {
  setText,
  setOrderBy,
} from '../../actions/filters';

test('should create set text action object', () => {
  const action = setText('test text');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'test text',
  });
});

test('should create set order by action object', () => {
  const action = setOrderBy('asc');
  expect(action).toEqual({
    type: 'SET_ORDER_BY',
    orderBy: 'asc',
  });
});
