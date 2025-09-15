const cities = document.querySelector("#cities");

cities.addEventListener("change", () => {
  const selected = cities.value;
  const demo = document.querySelector("#demo");
  demo.textContent = selected;
  const image = document.querySelector("#image");
  const img = document.createElement("img");
  img.src = `./img/${selected}.jpg`;
  img.title = selected;
  img.alt = selected;
  if(image.firstChild){
    image.replaceChild(img, image.firstChild)
  } else {
    image.appendChild(img);
  }
})