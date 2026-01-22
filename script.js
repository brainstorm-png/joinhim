function checkPassword() {
  const input = document.getElementById("password").value.toLowerCase();
  const message = document.getElementById("message");

  if (input === "frank sinatra") or (input === "sinatra") {
    window.location.href = "wrong.html";
  } 
  else if (input === "born free") {
    window.location.href = "stage2.html";
  } 
  else {
    message.textContent = "ACCESS DENIED";
  }
}
