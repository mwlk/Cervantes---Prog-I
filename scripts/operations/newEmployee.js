export function newEmployee() {
  const formContainer = document.getElementById("form_new_employee");
  if (formContainer.innerHTML.trim() === "") {
    loadForm(
      btnGroupAdd,
      "../../forms/employees/new/new.html",
      "form_new_employee"
    );
  } else {
    formContainer.innerHTML = ""; // Limpiar el formulario si ya está cargado
  }
}
