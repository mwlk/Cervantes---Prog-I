import { createNode, append } from "./utils/dom.js";
import { readLocalStorage, setLocalStorage } from "./utils/locale-storage.js";
import { call } from "./utils/calls.js";
import { format } from "./utils/format.js";

const url = "https://randomuser.me/api/?results=10";

const ul = document.getElementById("authors");

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

jsonList.map(function (user) {
  let li = createNode("li");
  let img = createNode("img");
  let span = createNode("span");

  img.src = user.picture;
  span.innerHTML = `${user.last} ${user.first}`;

  append(li, img);
  append(li, span);
  append(ul, li);
});
