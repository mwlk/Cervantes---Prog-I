export function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.classList.add("d-block");
    errorElement.classList.remove("d-none");
    const inputElement = document.getElementById(elementId.replace("Error", ""));
    inputElement.classList.add("is-invalid");
}
