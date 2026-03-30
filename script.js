const base = "http://nodejs1.dszcbaross.edu.hu:21003";
const api = "http://nodejs1.dszcbaross.edu.hu:21003/api/allPictures"

window.addEventListener("DOMContentLoaded", load)

async function load() {
    const gallery = document.querySelector("#gallery");
    gallery.innerHTML = "";

    try {
        const resp = await fetch(api);
        const data = await resp.json();

        render(data, gallery);
    } catch (e) {
        console.error(e);
        const p = document.createElement("p");
        p.textContent = "Nem sikerült betölteni a képeket!";
        gallery.appendChild(p);
    }
}

function render(data, element) {
    if(!data){
        return;
    }

    data.forEach(d => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.id = d.img_id;
        const img = document.createElement("img");
        img.src = `${base}${d.img}`;
        img.alt = d.name;
        img.title = d.name;
        img.loading = "lazy";
        card.append(img)
        element.append(card);
    });
}