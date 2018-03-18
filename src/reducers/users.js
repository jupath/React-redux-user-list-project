export const usersAreLoading = (state = false, action) => {
  switch (action.type) {
    case 'USERS_ARE_LOADING':
      return action.isLoading;
    default:
      return state;
  }
};

export const users = (state = [], action) => {
  switch (action.type) {
    case 'SET_USERS':
      return action.users;
    case 'UPDATE_USER':
      return state.map((user) => {
        if (user.username === action.username) {
          return {
            ...user,
            ...action.updatedData,
          };
        }
        return user;
      });
    default:
      return state;
  }
};
