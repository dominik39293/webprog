const characters = document.querySelector("#characters");

const uri = "https://raw.githubusercontent.com/Laboratoria/LIM011-data-lovers/master/src/data/potter/potter.json";


const fetchCharacters = async() => {
    try {
        const resp = await fetch(uri);
        const chars = await resp.json();

        displayChars(chars);
    } catch (e) {
        alert(`Hiba: ${e}`);
    }
}

const displayChars = (chars) => {
    chars.forEach(char => {
        const card = document.createElement("div");
        card.classList.add("card");
        const img = document.createElement("img");
        img.src = char.image;
        img.alt = char.name;
        card.appendChild(img);
        const content = document.createElement("div");
        content.classList.add("content");
        const h3 = document.createElement("h3");
        h3.textContent = char.name;
        content.appendChild(h3);
        const p = document.createElement("p");
        p.textContent = `Ház: ${char.house}`;
        content.appendChild(p);
        const p2 = document.createElement("p");
        p2.textContent = `Születési év: ${char.yearOfBirth}`;
        content.appendChild(p2);
        const p3 = document.createElement("p");
        p3.textContent = `Szinész: ${char.actor}`;
        content.appendChild(p3);
        card.appendChild(content);
        characters.appendChild(card);
    })
}

window.addEventListener("DOMContentLoaded", fetchCharacters);