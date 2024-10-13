import { append, createNode } from "./dom.js";

export function printTable(container, list) {
  let table = createNode("table");

  //! bootstrap table styles
  table.classList.add(
    "table",
    "table-striped",
    "table-bordered",
    "table-hover",
    "table-dark"
  );

  let thead = createNode("thead");
  let tbody = createNode("tbody");
  let tr = createNode("tr");

  let index = 1;

  let headers = ["#", "Nombre Completo", "Foto", "Acciones"];

  headers.forEach((text) => {
    let th = createNode("th");
    th.classList.add("text-center");
    th.innerHTML = text;
    append(tr, th);
  });

  append(thead, tr);
  append(table, thead);
  append(table, tbody);

  list.map(function (data) {
    let tr = createNode("tr");

    let indexCell = createNode("td");
    indexCell.innerHTML = index++;

    let fullNameCell = createNode("td");
    fullNameCell.innerHTML = `${data.last}, ${data.first}`;

    let pictureCell = createNode("td");
    pictureCell.classList.add("text-center");

    let img = createNode("img");
    img.classList.add("img-fluid", "rounded");
    img.src = data.picture;
    append(pictureCell, img);

    let actionsCell = createNode("td");
    actionsCell.classList.add("text-center");
    // Create action buttons
    let editButton = createNode("button");
    editButton.innerHTML = "Editar";
    editButton.classList.add("btn", "btn-primary", "btn-sm", "me-2");
    editButton.onclick = function () {
      alert(`Editar ${data.first} ${data.last}`);
    };

    let deleteButton = createNode("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.classList.add("btn", "btn-danger", "btn-sm");
    deleteButton.onclick = function () {
      alert(`Eliminar Usuario: ${data.id}?`);
    };

    // Append buttons to actionsCell
    append(actionsCell, editButton);
    append(actionsCell, deleteButton);

    append(tr, indexCell);
    append(tr, fullNameCell);
    append(tr, pictureCell);
    append(tr, actionsCell);

    append(tbody, tr);
  });
  append(container, table);
}
