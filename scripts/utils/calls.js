export function call(url) {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => {
      return data.results;
    })
    .catch((error) => {
      console.error("Error: ", error);
    });
}
