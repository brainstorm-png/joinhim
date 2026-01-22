function checkPassword() {
  const input = document
    .getElementById("password")
    .value
    .toLowerCase()
    .trim();

  const message = document.getElementById("message");

  if (input === "frank sinatra" || input === "sinatra") {
    window.location.href = "wrong.html";
  } 
  else if (input === "born free") {
    window.location.href = "stage2.html";
  } 
  else if (input === "vexxed") {
    window.location.href = "vexxed.html";
  } 
  else {
    message.textContent = "ACCESS DENIED";
  }
}
