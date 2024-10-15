import { printTable } from "./table.js";

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

export function remove(key, id, container) {
  let list = JSON.parse(readLocalStorage(key));

  if (Array.isArray(list)) {
    const updatedList = list.filter((element) => element.id !== id);

    setLocalStorage(key, JSON.stringify(updatedList));

    printTable(container, updatedList);
  } else {
    console.error("La lista no es un array.");
  }
}
