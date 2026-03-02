const dropdown = document.querySelector(".dropdown");
const galleryGrid = document.querySelector(".gallery-grid");
document.addEventListener("DOMContentLoaded", async () => await init());

let data;
document.addEventListener("change", async () => genCards(data, dropdown.value))
async function init() {
    data = await getData();
    genCards(data, genOptions(data));
}

async function getData(){
    return await (await fetch("https://picsum.photos/v2/list")).json();
}

function genOptions(data) {
    let names = [];
    let selectedName;
    data.forEach(d => {
        if (!names.includes(d.author)) {
            names.push(d.author);
            const option = document.createElement("option");
            option.textContent = d.author;
            dropdown.appendChild(option);
            if(!selectedName) selectedName = d.author;
        }
    });
    return selectedName;
}
function genCards(data, author) {
    galleryGrid.innerHTML = "";
    data.forEach(d => {
        if(d.author != author) return;
        const card = document.createElement("div");
        card.classList.add("card");
        const imageContainer = document.createElement("div");
        imageContainer.classList.add("image-container");
        const img = document.createElement("img");
        img.src = d.download_url.substring(0, d.download_url.length-9) + "600/400";
        console.log()
        img.alt = `${d.author}'s image`;
        imageContainer.appendChild(img);
        card.appendChild(imageContainer);
        const footer = document.createElement("div");
        footer.classList.add("footer");
        footer.textContent = `📷 ${d.author}`;
        card.appendChild(footer);
        galleryGrid.appendChild(card);
    });
}