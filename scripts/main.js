import { readLocalStorage, setLocalStorage } from "./utils/local-storage.js";
import { call } from "./utils/calls.js";
import { format } from "./utils/format.js";
import { printTable } from "./utils/table.js";
import { calculate } from "./operations/calculate.js";
import { clean } from "./operations/clean.js";
import { toggleButtons } from "./operations/toggle.js";
import { newEmployee } from "./operations/newEmployee.js"; // Importación de la nueva función

const url = "https://randomuser.me/api/?results=10";

const container = document.getElementById("main");
const btnGroupAdd = document.getElementById("btn_group_add");
const btnGroupList = document.getElementById("btn_group_list");
const btnGroupClean = document.getElementById("btn_group_clean");
const btnGroupSeeStatistics = document.getElementById(
  "btn_group_see_statistics"
);

btnGroupList.addEventListener("click", list);
btnGroupClean.addEventListener("click", clean);
btnGroupSeeStatistics.addEventListener("click", calculate);

btnGroupAdd.addEventListener("click", newEmployee);

const storage = readLocalStorage("employees");

if (storage === null) {
  sendRequest();
} else {
  checkStorage();
}

async function sendRequest() {
  try {
    const employees = await call(url);
    const formattedEmployees = format(employees);

    if (formattedEmployees) {
      const stringified = JSON.stringify(formattedEmployees);
      setLocalStorage("employees", stringified);
      checkStorage();
    }
  } catch (error) {
    alert("Ha ocurrido un error");
    console.error(error);
  }
}

function checkStorage() {
  const storaged = readLocalStorage("employees");

  if (storaged !== null) {
    const jsonList = JSON.parse(storaged);
    printTable(container, jsonList);
    toggleButtons(true);
  } else {
    toggleButtons(false);
  }
}

function list() {
  btnGroupList.disabled = true;
  sendRequest();
}
