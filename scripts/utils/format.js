export function format(users) {
  const listMapped = users.map(function (user) {
    return {
      first: user.name.first,
      last: user.name.last,
      picture: user.picture.medium,
    };
  });
  return listMapped;
}
