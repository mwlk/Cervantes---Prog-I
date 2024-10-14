export function format(users) {
  let index = 1;

  //! categories
  const hourValues = [1000, 2000, 3000];
  const workedHours = [80, 100, 160];

  const listMapped = users.map(function (user) {
    const hourValue = hourValues[Math.floor(Math.random() * hourValues.length)];
    const hoursWorked =
      workedHours[Math.floor(Math.random() * workedHours.length)];

    return {
      id: index++,
      first: user.name.first,
      last: user.name.last,
      picture: user.picture.medium,
      hourValue,
      hoursWorked,
    };
  });
  return listMapped;
}
