export async function loadModal(modalUrl, targetContainerId) {
  try {
    const response = await fetch(modalUrl);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const html = await response.text();
    const targetContainer = document.getElementById(targetContainerId);
    targetContainer.innerHTML = html;

    // Inicializa el modal de Bootstrap
    const modalElement = document.getElementById("detailModal");
    if (modalElement) {
      const modal = new bootstrap.Modal(modalElement); // Asegúrate de que Bootstrap JS esté cargado
      modal.show();
    }
  } catch (error) {
    console.error("Error al cargar el modal:", error);
  }
}
