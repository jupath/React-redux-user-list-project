import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import {
  usersAreLoading,
  setUsers,
  startSetUsers,
  updateUser
} from '../../actions/users';
import users from '../fixtures/users';
import response from '../fixtures/api-response';

const createMockStore = configureMockStore([thunk]);

test('should create users are loading action object', () => {
  const action = usersAreLoading(true);
  expect(action).toEqual({
    type: 'USERS_ARE_LOADING',
    isLoading: true
  });
});

test('should create set users action object', () => {
  const action = setUsers(users);
  expect(action).toEqual({
    type: 'SET_USERS',
    users
  });
});

test('should fetch the users from the API', () => {

  fetchMock.get('*', response);

  const expectedActions = [
    { type: 'USERS_ARE_LOADING', isLoading: true },
    { type: 'USERS_ARE_LOADING', isLoading: false },
    { type: 'SET_USERS', users: [users[0]] }
  ];

  const store = createMockStore({ users: [] });

  return store.dispatch(startSetUsers()).then(() => {
    expect(store.getActions()).toEqual(expectedActions);
  });
});

test('should create update user action object', () => {
  const username = 'testuser';
  const updatedData = {
    email: 'test@example.com'
  }
  const action = updateUser(username, updatedData);
  expect(action).toEqual({
    type: 'UPDATE_USER',
    username,
    updatedData
  })
});