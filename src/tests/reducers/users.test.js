import { usersAreLoading, users } from '../../reducers/users';
import usersFixture from '../fixtures/users';

test('should set usersAreLoading reducer default state', () => {
  const state = usersAreLoading(undefined, { type: '@@INIT' });
  expect(state).toBe(false);
});

test('should set usersAreLoading reducer state true', () => {
  const action = {
    type: 'USERS_ARE_LOADING',
    isLoading: true,
  };
  const state = usersAreLoading(undefined, action);
  expect(state).toBe(true);
});

test('should set users reducer default state', () => {
  const state = users(undefined, { type: '@@INIT' });
  expect(state).toEqual([]);
});

test('should set users', () => {
  const action = {
    type: 'SET_USERS',
    users: usersFixture,
  };
  const state = users(undefined, action);
  expect(state).toEqual(usersFixture);
});

test('should update user', () => {
  const email = 'test@example.com';
  const action = {
    type: 'UPDATE_USER',
    username: 'lazyduck408',
    updatedData: {
      email,
    },
  };
  const state = users(usersFixture, action);
  expect(state[0].email).toBe(email);
});
