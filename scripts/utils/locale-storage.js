export function readLocalStorage(key) {
  return localStorage.getItem(`${key}`);
}

export function setLocalStorage(key, data) {
  localStorage.setItem(`${key}`, data);
}
