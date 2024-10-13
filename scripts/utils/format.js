export function format(users) {
  let index = 1;
  const listMapped = users.map(function (user) {
    return {
      id: index++,
      first: user.name.first,
      last: user.name.last,
      picture: user.picture.medium,
    };
  });
  return listMapped;
}
