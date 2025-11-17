const pass = document.getElementById("password");
const lab = document.getElementById("label");

pass.addEventListener("keypress", (k) => {
  lab.textContent+= k.key;
})