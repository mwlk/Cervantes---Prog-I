export function showAlert(message, type) {
  const alert = document.createElement("div");
  alert.className = `alert alert-${type} alert-dismissible fade show`;
  alert.role = "alert";
  alert.innerHTML = message;

  alertContainer.appendChild(alert);

  setTimeout(() => {
    const alertToDismiss = alertContainer.querySelector(".alert");
    if (alertToDismiss) {
      alertToDismiss.classList.remove("show");
      alertToDismiss.classList.add("fade");
      setTimeout(() => alertToDismiss.remove(), 150);
    }
  }, 3000);
}
