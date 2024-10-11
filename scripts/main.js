import { createNode, append } from "./utils/dom.js";
import { readLocalStorage, setLocalStorage } from "./utils/locale-storage.js";
import { call } from "./utils/calls.js";
import { format } from "./utils/format.js";

const url = "https://randomuser.me/api/?results=10";

const ul = document.getElementById("authors");

const storage = readLocalStorage("random users");
console.log(storage !== null);

call(url)
  .then((users) => format(users))
  .then((mapped) => console.log(mapped))
  .catch((err) => {});

// fetch(url)
//   .then((response) => response.json())
//   .then(function (data) {
//     let authors = data.results;

//     let list = authors.map(function (author) {
//       return {
//         first: author.name.first,
//         last: author.name.last,
//         picture: author.picture.medium,
//       };
//     });

//     return JSON.stringify(list);
//   })
//   .then((list) => setLocalStorage("random users", list))
//   .then(() => {
//     const store = readLocalStorage("random users");

//     const jsonList = JSON.parse(store);

//     jsonList.map(function (user) {
//       let li = createNode("li");
//       let img = createNode("img");
//       let span = createNode("span");

//       img.src = user.picture;
//       span.innerHTML = `${user.last} ${user.first}`;

//       append(li, img);
//       append(li, span);
//       append(ul, li);
//     });
//   })
//   .catch((err) => {
//     alert("error");
//     console.error("error", err);
//   });
