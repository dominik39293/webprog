const cap = document.querySelector("#kupak");
const text = document.querySelector("#szoveg");
const container = document.querySelector(".tarolo");

let texts = [];

window.addEventListener("DOMContentLoaded", async () => {
  const resp = await fetch('https://raw.githubusercontent.com/dominik39293/webprog/refs/heads/main/7_topjoy_fetch/uzik.csv');
  await resp.text().split("\r\n").map(x => x.trim()).forEach(sor => {
    texts.push(sor);
  });
})

let isCapClosed = true;
