import { readLocalStorage, setLocalStorage } from "./utils/locale-storage.js";
import { call } from "./utils/calls.js";
import { format } from "./utils/format.js";
import { printTable } from "./utils/table.js";

const url = "https://randomuser.me/api/?results=10";

const container = document.getElementById("main");
const btnGroupList = document.getElementById("btn_group_list");
const btnGroupClean = document.getElementById("btn_group_clean");
const btnGroupSeeStatistics = document.getElementById(
  "btn_group_see_statistics"
);
const statisticAlert = document.getElementById("statistic_alert");

btnGroupList.addEventListener("click", list);
btnGroupClean.addEventListener("click", clean);
btnGroupSeeStatistics.addEventListener("click", calculate);

statisticAlert.hidden = true;

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

function toggleButtons(isStorageAvailable) {
  btnGroupList.disabled = isStorageAvailable;
  btnGroupClean.hidden = !isStorageAvailable;
  btnGroupSeeStatistics.hidden = !isStorageAvailable;
}

function list() {
  sendRequest();
}

function clean() {
  localStorage.removeItem("employees");
  container.innerHTML = "";
  statisticAlert.hidden = true;
  toggleButtons(false);
}

function calculate() {
  const employees = readLocalStorage("employees");
  const jsonList = JSON.parse(employees);

  const total = jsonList.reduce((acc, employee) => {
    return acc + employee.hoursWorked * employee.hourValue;
  }, 0);

  statisticAlert.hidden = false;
  document.getElementById(
    "statistic_result"
  ).innerHTML = `El total es: $${total}`;
}
