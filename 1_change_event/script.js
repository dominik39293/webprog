const cities = document.querySelector("#cities");

cities.addEventListener("change", () => {
  const selected = cities.value;
  const demo = document.querySelector("#demo");
  demo.textContent = selected;
  const image = document.querySelector("#image");
  const img = document.createElement("img");
  img.src = `https://raw.githubusercontent.com/dominik39293/webprog/refs/heads/main/1_change_event/img/${selected}.jpg`;
  img.title = selected;
  img.alt = selected;
  if(image.firstChild){
    image.replaceChild(img, image.firstChild)
  } else {
    image.appendChild(img);
  }
})
