import { toggleButtons } from "./toggle.js";

export function clean() {
  const container = document.getElementById("main");
  const statisticAlert = document.getElementById("statistic_alert");

  localStorage.removeItem("employees");
  container.innerHTML = "";
  statisticAlert.style.display = "none";
  toggleButtons(false);
}
