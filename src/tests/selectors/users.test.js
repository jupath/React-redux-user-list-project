import usersSelector from '../../selectors/users';
import users from '../fixtures/users';

test('should filter by text value', () => {
  const filters = {
    text: 'romain',
    orderBy: undefined
  };
  const result = usersSelector(users, filters);
  expect(result).toEqual([ users[0] ]);
});

test('should sort users by lastname descending', () => {
  const filters = {
    text: '',
    orderBy: 'desc'
  };
  const result = usersSelector(users, filters);
  expect(result).toEqual([ users[2], users[1], users[0] ]);
});

test("should filter by text and sort descending", () => {
  const filters = {
    text: 'user',
    orderBy: 'desc'
  };
  const result = usersSelector(users, filters);
  expect(result).toEqual([ users[2], users[1] ]);
});