import { readLocalStorage, setLocalStorage } from "./utils/locale-storage.js";
import { call } from "./utils/calls.js";
import { format } from "./utils/format.js";
import { printTable } from "./utils/table.js";

const url = "https://randomuser.me/api/?results=10";

const container = document.getElementById("main");
console.log(container);

const storage = readLocalStorage("random users");
console.log(storage !== null);

if (storage === null) {
  call(url)
    .then((users) => format(users))
    .then((users) => {
      if (users) {
        const stringified = JSON.stringify(users);
        setLocalStorage("random users", stringified);
      }
    })
    .catch((err) => {
      alert("Ha ocurrido un error");
      console.error(err);
    });
}

const storaged = readLocalStorage("random users");
const jsonList = JSON.parse(storaged);

printTable(container, jsonList);
