function checkStage2() {
  const input = document
    .getElementById("password2")
    .value
    .toLowerCase()
    .trim();

  const message = document.getElementById("message2");

  if (input === "epstein island") {
    window.location.href = "stage3.html";
  }
  else if (input === "little saint james") {
    window.location.href = "stage3.html";
  }
  else if (input === "epstein") {
    message.textContent = "YOU'RE CLOSE, JOIN HIM";
  }
  else {
    message.textContent = "INVALID KEY";
  }
}
