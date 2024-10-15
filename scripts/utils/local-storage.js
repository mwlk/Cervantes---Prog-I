export function readLocalStorage(key) {
  return localStorage.getItem(`${key}`);
}

export function setLocalStorage(key, data) {
  localStorage.setItem(`${key}`, data);
}

export function detail(key, id) {
  var list = JSON.parse(readLocalStorage(key));
  if (list !== null) {
    return list.find((element) => element.id === id);
  }
  return null;
}
