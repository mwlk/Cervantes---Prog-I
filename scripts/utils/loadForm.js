import { employeeNewFormHandler } from "./formHandler.js";

export function loadForm(element, formUrl, targetContainerId) {
  const targetContainer = document.getElementById(targetContainerId);

  if (!targetContainer) {
    console.error(`El contenedor con ID ${targetContainerId} no existe.`);
    return;
  }

  targetContainer.innerHTML = "";

  fetch(formUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((html) => {
      targetContainer.innerHTML = html;

      //! handler para el formulario recién cargado
      employeeNewFormHandler();
    })
    .catch((error) => console.error("Error al cargar el formulario:", error));
}
