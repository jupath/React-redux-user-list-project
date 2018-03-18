import { combineReducers } from 'redux';
import { users, usersAreLoading } from './users';
import { filters } from './filters';

export default combineReducers({
  users,
  usersAreLoading,
  filters,
});
