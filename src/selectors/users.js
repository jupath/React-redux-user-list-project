
export default (users, { text, orderBy }) => {
  return users.filter(user => {
    const regex = new RegExp( text, 'gi' );
    return user.firstName.match( regex ) || user.lastName.match( regex );
  }).sort((a, b) => {
    if( orderBy === 'desc' ) {
      return a.lastName < b.lastName ? 1 : -1;
    } else if ( orderBy === 'asc' ) {
      return a.lastName < b.lastName ? -1 : 1;
    }
  });
}