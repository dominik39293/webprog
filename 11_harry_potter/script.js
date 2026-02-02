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

    }
}

window.addEventListener("DOMContentLoaded", fetchCharacters);