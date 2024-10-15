import { loadForm } from "../utils/loadForm.js";

export function newEmployee() {
  const formContainer = document.getElementById("form_new_employee_container");

  if (
    formContainer.style.visibility === "hidden" ||
    formContainer.style.visibility === ""
  ) {
    formContainer.style.visibility = "visible"; // Mostrar el formulario si está oculto

    if (formContainer.innerHTML.trim() === "") {
      loadForm(
        document.getElementById("btn_group_add"),
        "../../forms/employees/new/new.html",
        "form_new_employee_container"
      );
    }
  } else {
    formContainer.style.visibility = "hidden"; // Ocultar el formulario si está visible
  }
}
