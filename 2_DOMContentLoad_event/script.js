const cities = [
    { name: "Berlin", value: "berlin"},
    { name: "Tokyo", value: "tokyo" },
    { name: "Rio", value: "rio" },
    { name: "Nairobi", value: "nairobi" },
    { name: "Lisszabon", value: "lisbon" },
    { name: "Moszkva", value: "moscow" },
    { name: "Denver", value: "denver" },
    { name: "Stockholm", value: "stockholm" },
    { name: "Helsinki", value: "helsinki" },
    { name: "Professzor", value: "professor" },
];

const selectmenu = document.querySelector("#city");
window.addEventListener('DOMContentLoaded', render);

function render() {
    cities.forEach(city => {
        let option = document.createElement("option");
        option.value = city.value;
        option.text = city.name;
        selectmenu.appendChild(option);
    });
}

selectmenu.addEventListener("change", asd);
function asd() {
    const selected = selectmenu.value;
    const demo = document.querySelector("#demo");
    demo.textContent = selected;
    const image = document.querySelector("#image");
    const img = document.createElement("img");
    img.src = `https://raw.githubusercontent.com/dominik39293/webprog/refs/heads/main/2_DOMContentLoad_event/img/${selected.toLowerCase()}.jpg`;
    img.title = selected;
    img.alt = selected;
    if(image.firstChild){
      image.replaceChild(img, image.firstChild)
    } else {
    image.appendChild(img);
  }
}