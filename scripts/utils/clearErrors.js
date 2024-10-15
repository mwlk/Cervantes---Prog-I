export function clearErrors(form) {
    const errorElements = form.querySelectorAll(".invalid-feedback");
    errorElements.forEach((errorElement) => {
        errorElement.textContent = ""; // Limpiar el mensaje
        errorElement.classList.remove("d-block"); // Ocultar el mensaje
        errorElement.classList.add("d-none");
    });

    const inputElements = form.querySelectorAll("input, select");
    inputElements.forEach((inputElement) => {
        inputElement.classList.remove("is-invalid"); // Limpiar el estado de error
    });
}
