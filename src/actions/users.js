
export const usersAreLoading = bool => ({
  type: 'USERS_ARE_LOADING',
  isLoading: bool,
});

export const setUsers = users => ({
  type: 'SET_USERS',
  users,
});

export const startSetUsers = url => async (dispatch) => {
  dispatch(usersAreLoading(true));

  try {
    const response = await fetch(url);
    const data = await response.json();
    const results = await data.results;
    const users = await results.map(user => ({
      username: user.login.username,
      firstName: user.name.first,
      lastName: user.name.last,
      email: user.email,
      address: `${user.location.street}, ${user.location.city}, ${user.location.state}, ${user.location.postcode}`,
      dob: user.dob,
      cell: user.cell,
      image: user.picture.large,
    }));
    await dispatch(usersAreLoading(false));
    await dispatch(setUsers(users));
  } catch (e) {
    console.error(e);
  }
};

export const updateUser = (username, updatedData) => ({
  type: 'UPDATE_USER',
  username,
  updatedData,
});
