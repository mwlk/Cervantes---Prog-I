export function loadForm(element, formUrl, targetContainerId) {
  element.addEventListener("click", function () {
    fetch(formUrl)
      .then((response) => response.text())
      .then((html) => {
        const targetContainer = document.getElementById(targetContainerId);
        targetContainer.innerHTML = html;
      })
      .catch((error) => console.error("Error al cargar el formulario:", error));
  });
}
