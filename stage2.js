function checkStage2() {
  const input = document
    .getElementById("password2")
    .value
    .toLowerCase()
    .trim();

  const message = document.getElementById("message2");

  if (input === "EPSTEIN ISLAND") {
    window.location.href = "stage3.html";
  }
  else if (input === "LITTLE SAINT JAMES") {
    window.location.href = "stage3.html";
   }
  else if (input === "EPSTEIN") {
    message.textContent = "YOU'RE CLOSE, JOIN HIM";
  }
  else {
    message.textContent = "INVALID KEY";
  }
}
