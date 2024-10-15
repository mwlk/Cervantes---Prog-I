import { readLocalStorage, setLocalStorage } from "./local-storage.js";
import { printTable } from "./table.js";
import { showAlert } from "./alert.js";
import { toggleButtons } from "../operations/toggle.js";
import { clearErrors } from "./clearErrors.js";
import { showError } from "./showError.js";

export function employeeNewFormHandler() {
  const form = document.getElementById("employee_form");
  document.getElementById("name").focus();

  if (!form) {
    console.error(`no existe un formulario`);
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault(); //* evitar que el form actue predeterminadamente

    const first = document.getElementById("name").value;
    const last = document.getElementById("surname").value;
    const hourValue = document.getElementById("hourValue").value;
    const hoursWorked = document.getElementById("hoursWorked").value;

    // Limpiar los estados de error anteriores
    clearErrors(form); // Pasar el formulario para limpiar errores

    let hasError = false;

    if (!first) {
      showError("nameError", "Por favor, ingresa un nombre.");
      hasError = true;
    }

    if (!last) {
      showError("surnameError", "Por favor, ingresa un apellido.");
      hasError = true;
    }

    if (!hourValue) {
      showError("hourValueError", "Por favor, selecciona un valor hora.");
      hasError = true;
    }

    if (!hoursWorked) {
      showError(
        "hoursWorkedError",
        "Por favor, ingresa la cantidad de horas trabajadas."
      );
      hasError = true;
    }

    if (hasError) {
      showAlert("Por favor, completa todos los campos.", "danger");
      return; // Detener el proceso si hay errores
    }

    const employees = JSON.parse(readLocalStorage("employees")) || [];

    const newEmployee = {
      id: employees.length + 1,
      first,
      last,
      picture: "https://randomuser.me/api/portraits/med/men/1.jpg", // Imagen por defecto
      hourValue: parseFloat(hourValue) * 1000,
      hoursWorked: parseInt(hoursWorked),
    };

    employees.push(newEmployee);
    setLocalStorage("employees", JSON.stringify(employees));

    const container = document.getElementById("main");
    printTable(container, employees);

    toggleButtons(true);
    form.reset();
    document.getElementById("name").focus();
  });
}
