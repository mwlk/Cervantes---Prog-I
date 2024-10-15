import { readLocalStorage } from "../utils/local-storage.js";

export function calculate() {
  const employees = readLocalStorage("employees");
  const jsonList = JSON.parse(employees);

  const statisticAlert = document.getElementById("statistic_alert");

  const total = jsonList.reduce((acc, employee) => {
    return acc + employee.hoursWorked * employee.hourValue;
  }, 0);

  statisticAlert.style.display = "block";

  document.getElementById(
    "statistic_result"
  ).innerHTML = `El total es: $${total}`;
}
