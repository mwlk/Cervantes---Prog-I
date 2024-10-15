import { append, createNode } from "./dom.js";

export function printTable(container, list) {
  container.innerHTML = "";

  let table = createNode("table");

  //! bootstrap table styles
  table.classList.add(
    "table",
    "table-striped",
    "table-bordered",
    "table-hover",
    "glass"
  );

  let thead = createNode("thead");
  let tbody = createNode("tbody");
  let tr = createNode("tr");

  let index = 1;

  let headers = [
    "#",
    "Foto",
    "Nombre Completo",
    "Valor Hora",
    "Horas Trabajadas",
    "Acciones",
  ];

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

    let pictureCell = createNode("td");
    pictureCell.classList.add("text-center");

    let img = createNode("img");
    img.classList.add("img-fluid", "rounded");
    img.src = data.picture;
    append(pictureCell, img);

    let fullNameCell = createNode("td");
    fullNameCell.innerHTML = `${data.last}, ${data.first}`;

    let actionsCell = createNode("td");
    actionsCell.classList.add(
      "d-flex",
      "flex-column",
      "justify-content-center",
      "align-items-center"
    );

    let hourValueCell = createNode("td");
    hourValueCell.innerHTML = data.hourValue;

    let hoursWorkedCell = createNode("td");
    hoursWorkedCell.innerHTML = data.hoursWorked;

    // Create action buttons
    let editButton = createNode("button");
    editButton.innerHTML = "Ver Detalle";
    editButton.classList.add("btn", "btn-secondary", "btn-sm", "mb-3", "w-100");
    editButton.onclick = function () {
      alert(`Detalle: ${data.first} ${data.last}`);
    };

    let deleteButton = createNode("button");
    deleteButton.innerHTML = "Eliminar";
    deleteButton.classList.add("btn", "btn-outline-danger", "btn-sm", "w-100");
    deleteButton.onclick = function () {
      alert(`Eliminar Usuario: ${data.id}?`);
    };

    // Append buttons to actionsCell
    append(actionsCell, editButton);
    append(actionsCell, deleteButton);

    append(tr, indexCell);
    append(tr, pictureCell);
    append(tr, fullNameCell);
    append(tr, hourValueCell);
    append(tr, hoursWorkedCell);
    append(tr, actionsCell);

    append(tbody, tr);
  });
  append(container, table);
}
